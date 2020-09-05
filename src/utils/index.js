export function generateInlineFallbackStyles({ logicalStyle, ltrFallbackStyles, rtlFallbackStyles }) {
    return `
        & {
            ${logicalStyle};
        }
        [dir=ltr] & {
            ${ltrFallbackStyles};
        }
        
        [dir=rtl] & {
            ${rtlFallbackStyles};
        }
    `;
}

export function transformLogicalProperty({
    logicalProperty,
    fallbackProperties,
    singleValueProperty = false,
}) {
    return (value) => {
        const valueList = value.trim().split(/\s+/);
        return `
            & {
                ${toArray(fallbackProperties)
                    .map(
                        (property, i) =>
                            `${property}: ${
                                singleValueProperty
                                    ? valueList[
                                          Math.min(valueList.length - 1, i)
                                      ]
                                    : value
                            };`
                    )
                    .join('')}
                ${logicalProperty}: ${value};
            }
        `;
    };
}


export function transformLogicalInlineProperty({logicalProperty, ltrFallbackStyle, rtlFallbackStyle}) {
    return (value) => generateInlineFallbackStyles({
        logicalStyle: `${logicalProperty}: ${value}`,
        ltrFallbackStyles: `${ltrFallbackStyle}: ${value}`,
        rtlFallbackStyles: `${rtlFallbackStyle}: ${value}`
    })
}

export function transformLogicalInlinePropertyWithShorthand({
    logicalProperty,
    ltrStartProperty,
    ltrEndProperty,
    directionalSingleValueProperty = false,
}) {
    return (value) => {
        const [startValue, endValue = startValue] = value.trim().split(/\s+/);
        return `
            & {
                ${logicalProperty}: ${value};
            }
            [dir=ltr] & {
                ${ltrStartProperty}: ${directionalSingleValueProperty ? startValue : value};
                ${ltrEndProperty}: ${directionalSingleValueProperty ? endValue : value};
            }
            [dir=rtl] & {
                ${ltrEndProperty}: ${directionalSingleValueProperty ? startValue : value};
                ${ltrStartProperty}: ${directionalSingleValueProperty ? endValue : value};
            }
        `;
    };
}

export function transform4DimensionalLogicalProperty({property}) {
    return (value) => {
        const [keyword, ...valueList] = value.trim().split(/\s+/);
        if (keyword !== 'logical')
            return `
            & {
                ${property}: ${value};
            }
        `;
        else if (valueList.length !== 4) {
            return `
                & {
                    ${property}: ${valueList.join(' ')};
                    ${property}: ${value};
                }
            `;
        } else {
            return `
                & {
                    ${property}: ${value};
                }

                [dir=ltr] & {
                    ${property}: ${valueList[0]} ${valueList[3]} ${valueList[2]} ${
                valueList[1]
            };
                }

                [dir=rtl] & {
                    ${property}: ${valueList.join(' ')}
                }
            `;
        }
    };
}

export function transform4DimensionalDirectionalLogicalProperty({property, blockStartProperty, blockEndProperty, inlineStartProperty, inlineEndProperty}) {
    return (value) => {
        const [keyword, ...valueList] = value.trim().split(/\s+/);
        if (keyword !== 'logical')
            return `
            & {
                ${property}: ${value};
            }
        `;
        else if (valueList.length === 1) {
            return `
                & {
                    ${blockStartProperty}: ${valueList[0]};
                    ${inlineEndProperty}: ${valueList[0]};
                    ${blockEndProperty}: ${valueList[0]};
                    ${inlineStartProperty}: ${valueList[0]};
                }
            `;
        } else if (valueList.length === 2) {
            return `
                & {
                    ${blockStartProperty}: ${valueList[0]};
                    ${inlineEndProperty}: ${valueList[1]};
                    ${blockEndProperty}: ${valueList[0]};
                    ${inlineStartProperty}: ${valueList[1]};
                }
            `;
        } else if (valueList.length === 3) {
            return `
                & {
                    ${blockStartProperty}: ${valueList[0]};
                    ${inlineEndProperty}: ${valueList[1]};
                    ${blockEndProperty}: ${valueList[2]};
                    ${inlineStartProperty}: ${valueList[1]};
                }
            `;
        } else if (valueList.length === 4) {
            return `
                & {
                    ${blockStartProperty}: ${valueList[0]};
                    ${blockEndProperty}: ${valueList[2]};
                }

                [dir=ltr] & {
                    ${inlineEndProperty}: ${valueList[3]};
                    ${inlineStartProperty}: ${valueList[1]};
                }

                [dir=rtl] & {
                    ${inlineEndProperty}: ${valueList[1]};
                    ${inlineStartProperty}: ${valueList[3]};
                }
            `;
        }
    };
}

export function transformPropertyWithLogicalDirectionalValues({ property }) {
    return (value) => {
        const logicalValues = {
            'inline-start': {
                ltrFallback: 'left',
                rtlFallback: 'right',
            },
            'inline-end': {
                ltrFallback: 'right',
                rtlFallback: 'left',
            },
            'start': {
                ltrFallback: 'left',
                rtlFallback: 'right',
            },
            'end': {
                ltrFallback: 'right',
                rtlFallback: 'left',
            },
        };
        if (!logicalValues[value]) {
            return `
                & {
                    ${property}: ${value};
                }
            `;
        } else {
            return `
                & {
                    ${property}: ${value};
                }

                [dir=ltr] & {
                    ${property}: ${logicalValues[value].ltrFallback}
                }

                [dir=rtl] & {
                    ${property}: ${logicalValues[value].rtlFallback}
                }
            `;
        }
    };
}

export function transformPropertyWithLogicalValues({ property }) {
    return (value) => {
        const logicalValues = {
            block: 'vertical',
            inline: 'horizontal',
        };
        if (!logicalValues[value]) {
            return `
                & {
                    ${property}: ${value};
                }
            `;
        } else {
            return `
                & {
                    ${property}: ${logicalValues[value]};
                    ${property}: ${value};
                }
            `;
        }
    };
}

function toArray(item) {
    return Array.isArray(item) ? item : [item]; 
}