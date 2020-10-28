export function generateStyles(selector, { base, ltr, rtl } = {}) {
    return `
      ${
          base
              ? `${selector} {
          ${base}
      }`
              : ''
      }
      ${
          ltr
              ? `[dir=ltr] ${selector} {
          ${ltr}
      }`
              : ''
      }
      ${
          rtl
              ? `[dir=rtl] ${selector} {
          ${rtl}
      }`
              : ''
      }
  `;
}

export function transformLogicalProperty({ properties }) {
    return (value) => ({
        base: properties.map((property) => `${property}: ${value};`).join(''),
    });
}

export function transformLogicalInlineProperty({
    ltrFallbackStyle,
    rtlFallbackStyle,
}) {
    return (value) => {
        return {
            ltr: `
          ${ltrFallbackStyle}: ${value};
      `,
            rtl: `
          ${rtlFallbackStyle}: ${value};
      `,
        };
    };
}

export function transformLogicalInlinePropertyWithShorthand({
    ltrStartProperty,
    ltrEndProperty,
}) {
    return (value) => {
        const { baseValue, startValue, endValue } = getInlineValue(value);
        return {
            base:
                baseValue &&
                `
          ${ltrStartProperty}: ${baseValue};
          ${ltrEndProperty}: ${baseValue};
      `,
            ltr:
                startValue &&
                endValue &&
                `
          ${ltrStartProperty}: ${startValue};
          ${ltrEndProperty}: ${endValue};
      `,
            rtl:
                startValue &&
                endValue &&
                `
          ${ltrEndProperty}: ${startValue};
          ${ltrStartProperty}: ${endValue};
      `,
        };
    };
}

export function transform4DimensionalDirectionalLogicalProperty({
    blockStartProperty,
    blockEndProperty,
    inlineStartProperty,
    inlineEndProperty,
}) {
    return (value) => {
        const { isLogical, rawValue } = extractLogicalValue(value);
        const {
            blockStartValue,
            blockEndValue,
            inlineStartValue,
            inlineEndValue,
        } = getFourDimensionalValue(rawValue);
        const hasLTRAndRTLRules =
            isLogical && inlineStartValue !== inlineEndValue;
        return {
            base: `
          ${blockStartProperty}: ${blockStartValue};
          ${blockEndProperty}: ${blockEndValue};
          ${
              !hasLTRAndRTLRules
                  ? `
              ${inlineStartProperty}: ${inlineStartValue};
              ${inlineEndProperty}: ${inlineEndValue};
          `
                  : ''
          }
      `,
            ltr:
                hasLTRAndRTLRules &&
                `
          ${inlineStartProperty}: ${inlineEndValue};
          ${inlineEndProperty}: ${inlineStartValue};
      `,
            rtl:
                hasLTRAndRTLRules &&
                `
          ${inlineStartProperty}: ${inlineStartValue};
          ${inlineEndProperty}: ${inlineEndValue};
      `,
        };
    };
}

export function transform4DimensionalLogicalProperty({ property }) {
    return (value) => {
        const { isLogical, rawValue } = extractLogicalValue(value);
        const {
            blockStartValue,
            blockEndValue,
            inlineStartValue,
            inlineEndValue,
        } = getFourDimensionalValue(rawValue);
        if (!isLogical) return;

        if (inlineStartValue === inlineEndValue) {
            return {
                base: `${property}: ${rawValue}`,
            };
        }

        return {
            ltr: `${property}: ${blockStartValue} ${inlineStartValue} ${blockEndValue} ${inlineEndValue};`,
            rtl: `${property}: ${rawValue}`,
        };
    };
}

export function transformPropertyWithLogicalDirectionalValues({
    property,
    inlineStartValue,
    inlineEndValue,
}) {
    return (value) => {
        if (value === inlineStartValue) {
            return {
                ltr: `${property}: left`,
                rtl: `${property}: right`,
            };
        }
        if (value === inlineEndValue) {
            return {
                ltr: `${property}: right`,
                rtl: `${property}: left`,
            };
        }
    };
}

export function transformPropertyWithLogicalValues({ property }) {
    return (value) => {
        const logicalValues = {
            block: 'vertical',
            inline: 'horizontal',
        };
        if (logicalValues[value]) {
            return {
                base: `${property}: ${logicalValues[value]};`,
            };
        }
    };
}

function getKeysFromValue(value) {
    return value.trim().split(/\s+/);
}

function getInlineValue(value) {
    const keys = getKeysFromValue(value);
    if (keys.length === 1) {
        return {
            baseValue: value,
        };
    }

    return {
        startValue: keys[0],
        endValue: keys[1],
    };
}

function extractLogicalValue(value) {
    const keys = getKeysFromValue(value);
    const isLogical = keys[0] === 'logical';
    if (isLogical) keys.shift();

    return {
        rawValue: keys.join(' '),
        isLogical,
    };
}

function getFourDimensionalValue(value) {
    const keys = getKeysFromValue(value);

    if (keys.length === 1) {
        return {
            blockStartValue: keys[0],
            blockEndValue: keys[0],
            inlineStartValue: keys[0],
            inlineEndValue: keys[0],
        };
    }
    if (keys.length === 2) {
        return {
            blockStartValue: keys[0],
            blockEndValue: keys[0],
            inlineStartValue: keys[1],
            inlineEndValue: keys[1],
        };
    }
    if (keys.length === 3) {
        return {
            blockStartValue: keys[0],
            blockEndValue: keys[2],
            inlineStartValue: keys[1],
            inlineEndValue: keys[1],
        };
    }
    return {
        blockStartValue: keys[0],
        blockEndValue: keys[2],
        inlineStartValue: keys[3],
        inlineEndValue: keys[1],
    };
}
