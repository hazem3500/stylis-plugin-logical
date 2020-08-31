export function generateInlineFallbackStyles({ logicalStyle, ltrFallbackStyles, rtlFallbackStyles }) {
    return `
        ${logicalStyle};
        @supports not (${logicalStyle}) {
            [dir=ltr] & {
                ${ltrFallbackStyles};
            }
            
            [dir=rtl] & {
                ${rtlFallbackStyles};
            }
        }
    `;
}

export function transformLogicalProperty({
    logicalProperty,
    fallbackProperty,
}) {
    return (value) => `
        ${logicalProperty}: ${value};
        @supports not (${logicalProperty}: ${value}) {
            ${fallbackProperty}: ${value};
        }
    `;
}


export function transformLogicalInlineProperty({logicalProperty, ltrFallbackStyle, rtlFallbackStyle}) {
    return (value) => generateInlineFallbackStyles({
        logicalStyle: `${logicalProperty}: ${value}`,
        ltrFallbackStyles: `${ltrFallbackStyle}: ${value}`,
        rtlFallbackStyles: `${rtlFallbackStyle}: ${value}`
    })
}

export function transformPaddingInlineStart(value) {
    return transformLogicalInlineProperty({
        logicalProperty: 'padding-inline-start',
        ltrFallbackStyle: 'padding-left',
        rtlFallbackStyle: 'padding-right',
    })(value)
}

export function transformPaddingInlineEnd(value) {
    return transformLogicalInlineProperty({
        logicalProperty: 'padding-inline-end',
        ltrFallbackStyle: 'padding-right',
        rtlFallbackStyle: 'padding-left',
    })(value)
}