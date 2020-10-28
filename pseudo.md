# Transforms

## TransformLogicalProperty

```js
(properties) => (value) => ({
    base: properties.map((property) => `${property}: ${value};`).join(''),
});
```

## transformLogicalInlinePropertyWithShorthand

```js
({ ltrStartProperty, ltrEndProperty }) => (value) => {
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
```

## transformLogicalInlineProperty

```js
function transformLogicalInlineProperty({
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
```

## transform4DimensionalDirectionalProperty

```js
function transform4DimensionalDirectionalProperty({
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
            isLogical && inlineStartValue === inlineEndValue;
        return {
            base: `
            ${blockStartProperty}: ${blockStartValue};
            ${blockEndProperty}: ${blockEndValue};
            ${
                !hasLTRAndRTLRules &&
                `
                ${inlineStartProperty}: ${inlineStartValue};
                ${inlineEndProperty}: ${inlineEndValue};
            `
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
```

## transform4DimensionalLogicalProperty

```js
function transform4DimensionalLogicalProperty({ property }) {
    return (value) => {
        const { isLogical, rawValue } = extractLogicalValue(value);
        const {
            blockStartValue,
            blockEndValue,
            inlineStartValue,
            inlineEndValue,
        } = getFourDimensionalValue(rawValue);
        if (!isLogical || inlineStartValue === inlineEndValue) {
            return {
                base: `${property}: ${rawValue}`,
            };
        }

        return {
            ltr: `${property}: ${blockStartValue} ${inlineEndValue} ${blockEndValue} ${inlineStartValue};`,
            rtl: `${property}: ${rawValue}`,
        };
    };
}
```

## transformPropertyWithLogicalDirectionalValues

```js
function transformPropertyWithLogicalDirectionalValues({
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
        return null;
    };
}
```

## transformPropertyWithLogicalValues

```js
function transformPropertyWithLogicalValues({ property }) {
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
        return null;
    };
}
```

# Helpers

## getKeysFromValue

```js
const getKeysFromValue = (value) => value.trim().split(/\s+/);
```

## getInlineValue

```js
const getInlineValue = (value) => {
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
};
```

## getFourDimensionalValue

```js
function getFourDimensionalValue(value) {
    const keys = getKeysFromValue(value);

    if (keys.length === 1) {
        return {
            blockStartValue: key[0],
            blockEndValue: key[0],
            inlineStartValue: key[0],
            inlineEndValue: key[0],
        };
    }
    if (keys.length === 2) {
        return {
            blockStartValue: key[0],
            blockEndValue: key[0],
            inlineStartValue: key[1],
            inlineEndValue: key[1],
        };
    }
    if (keys.length === 3) {
        return {
            blockStartValue: key[0],
            blockEndValue: key[2],
            inlineStartValue: key[1],
            inlineEndValue: key[1],
        };
    }
    return {
        blockStartValue: key[0],
        blockEndValue: key[2],
        inlineStartValue: key[3],
        inlineEndValue: key[1],
    };
}
```

## extractLogicalValue

```js
function extractLogicalValue(value) {
    const keys = getKeysFromValue(value);
    const isLogical = keys[0];
    if (isLogical) keys.shift();

    return {
        rawValue: keys.join(' '),
        isLogical,
    };
}
```
