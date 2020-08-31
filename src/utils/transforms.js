import { transformLogicalInlineProperty, transformLogicalProperty, transformPaddingInlineEnd, transformPaddingInlineStart } from ".";

const transforms = {
    // // Flow-Relative Values
    // clear: transformFloat,
    // float: transformFloat,
    // resize: transformResize,
    // 'text-align': transformTextAlign,

    // // Logical Height and Logical Width
    'block-size': transformLogicalProperty({
        logicalProperty: 'block-size',
        fallbackProperty: 'height',
    }),
    'max-block-size': transformLogicalProperty({
        logicalProperty: 'max-block-size',
        fallbackProperty: 'max-height',
    }),
    'min-block-size': transformLogicalProperty({
        logicalProperty: 'min-block-size',
        fallbackProperty: 'min-height',
    }),
    'inline-size': transformLogicalProperty({
        logicalProperty: 'inline-size',
        fallbackProperty: 'width',
    }),
    'max-inline-size': transformLogicalProperty({
        logicalProperty: 'max-inline-size',
        fallbackProperty: 'max-width',
    }),
    'min-inline-size': transformLogicalProperty({
        logicalProperty: 'min-inline-size',
        fallbackProperty: 'min-width',
    }),

    // // Flow-relative Margins
    // margin: transformDirectionalShorthands,
    // 'margin-inline': transformSide['inline'],
    'margin-inline-end': transformLogicalInlineProperty({
        logicalProperty: 'margin-inline-end',
        ltrFallbackStyle: 'margin-right',
        rtlFallbackStyle: 'margin-left',
    }),
    'margin-inline-start': transformLogicalInlineProperty({
        logicalProperty: 'margin-inline-start',
        ltrFallbackStyle: 'margin-left',
        rtlFallbackStyle: 'margin-right',
    }),
    // 'margin-block': transformSide['block'],
    'margin-block-end': transformLogicalProperty({
        logicalProperty: 'margin-block-end',
        fallbackProperty: 'margin-bottom',
    }),
    'margin-block-start': transformLogicalProperty({
        logicalProperty: 'margin-block-start',
        fallbackProperty: 'margin-top',
    }),

    // // Flow-relative Offsets
    // inset: transformInset,
    // 'inset-inline': transformSide['inline'],
    'inset-inline-end': transformLogicalInlineProperty({
        logicalProperty: 'inset-inline-end',
        ltrFallbackStyle: 'right',
        rtlFallbackStyle: 'left',
    }),
    'inset-inline-start': transformLogicalInlineProperty({
        logicalProperty: 'inset-inline-start',
        ltrFallbackStyle: 'left',
        rtlFallbackStyle: 'right',
    }),
    // 'inset-block': transformSide['block'],
    'inset-block-end': transformLogicalProperty({
        logicalProperty: 'inset-block-end',
        fallbackProperty: 'bottom',
    }),
    'inset-block-start': transformLogicalProperty({
        logicalProperty: 'inset-block-start',
        fallbackProperty: 'top',
    }),

    // Flow-relative Padding
    // padding: transformDirectionalShorthands,
    // 'padding-inline': transformSide['inline'],
    'padding-inline-end': transformLogicalInlineProperty({
        logicalProperty: 'padding-inline-end',
        ltrFallbackStyle: 'padding-right',
        rtlFallbackStyle: 'padding-left',
    }),
    'padding-inline-start': transformLogicalInlineProperty({
        logicalProperty: 'padding-inline-start',
        ltrFallbackStyle: 'padding-left',
        rtlFallbackStyle: 'padding-right',
    }),
    // 'padding-block': transformSide['block'],
    'padding-block-end': transformLogicalProperty({
        logicalProperty: 'padding-block-end',
        fallbackProperty: 'padding-bottom',
    }),
    'padding-block-start': transformLogicalProperty({
        logicalProperty: 'padding-block-start',
        fallbackProperty: 'padding-top',
    }),

    // // Flow-relative Borders
    // 'border-block': transformBorder['border-block'],
    // 'border-block-color': transformBorder['border-block'],
    // 'border-block-style': transformBorder['border-block'],
    // 'border-block-width': transformBorder['border-block'],
    'border-block-end': transformLogicalProperty({
        logicalProperty: 'border-block-end',
        fallbackProperty: 'border-bottom',
    }),
    'border-block-end-color': transformLogicalProperty({
        logicalProperty: 'border-block-end-color',
        fallbackProperty: 'border-bottom-color',
    }),
    'border-block-end-style': transformLogicalProperty({
        logicalProperty: 'border-block-end-style',
        fallbackProperty: 'border-bottom-style',
    }),
    'border-block-end-width': transformLogicalProperty({
        logicalProperty: 'border-block-end-width',
        fallbackProperty: 'border-bottom-width',
    }),
    'border-block-start': transformLogicalProperty({
        logicalProperty: 'border-block-start',
        fallbackProperty: 'border-start',
    }),
    'border-block-start-color': transformLogicalProperty({
        logicalProperty: 'border-block-start-color',
        fallbackProperty: 'border-start-color',
    }),
    'border-block-start-style': transformLogicalProperty({
        logicalProperty: 'border-block-start-style',
        fallbackProperty: 'border-start-style',
    }),
    'border-block-start-width': transformLogicalProperty({
        logicalProperty: 'border-block-start-width',
        fallbackProperty: 'border-start-width',
    }),
    // 'border-inline': transformBorder['border-inline'],
    // 'border-inline-color': transformBorder['border-inline'],
    // 'border-inline-style': transformBorder['border-inline'],
    // 'border-inline-width': transformBorder['border-inline'],
    'border-inline-end': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-end',
        ltrFallbackStyle: 'border-right',
        rtlFallbackStyle: 'border-left',
    }),
    'border-inline-end-color': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-end-color',
        ltrFallbackStyle: 'border-right-color',
        rtlFallbackStyle: 'border-left-color',
    }),
    'border-inline-end-style': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-end-style',
        ltrFallbackStyle: 'border-right-style',
        rtlFallbackStyle: 'border-left-style',
    }),
    'border-inline-end-width': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-end-width',
        ltrFallbackStyle: 'border-right-width',
        rtlFallbackStyle: 'border-left-width',
    }),
    'border-inline-start': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-start',
        ltrFallbackStyle: 'border-left',
        rtlFallbackStyle: 'border-right',
    }),
    'border-inline-start-color': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-start-color',
        ltrFallbackStyle: 'border-left-color',
        rtlFallbackStyle: 'border-right-color',
    }),
    'border-inline-start-style': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-start-style',
        ltrFallbackStyle: 'border-left-style',
        rtlFallbackStyle: 'border-right-style',
    }),
    'border-inline-start-width': transformLogicalInlineProperty({
        logicalProperty: 'border-inline-start-width',
        ltrFallbackStyle: 'border-left-width',
        rtlFallbackStyle: 'border-right-width',
    }),

    // // Flow-relative Corner Rounding
    'border-end-end-radius': transformLogicalInlineProperty({
        logicalProperty: 'border-end-end-radius',
        ltrFallbackStyle: 'border-bottom-right-radius',
        rtlFallbackStyle: 'border-bottom-left-radius',
    }),
    'border-end-start-radius': transformLogicalInlineProperty({
        logicalProperty: 'border-end-start-radius',
        ltrFallbackStyle: 'border-bottom-left-radius',
        rtlFallbackStyle: 'border-bottom-right-radius',
    }),
    'border-start-end-radius': transformLogicalInlineProperty({
        logicalProperty: 'border-start-end-radius',
        ltrFallbackStyle: 'border-top-right-radius',
        rtlFallbackStyle: 'border-top-left-radius',
    }),
    'border-start-start-radius': transformLogicalInlineProperty({
        logicalProperty: 'border-start-start-radius',
        ltrFallbackStyle: 'border-top-left-radius',
        rtlFallbackStyle: 'border-top-right-radius',
    }),

    // // Four-Directional Shorthand Border Properties
    // 'border-color': transformDirectionalShorthands,
    // 'border-style': transformDirectionalShorthands,
    // 'border-width': transformDirectionalShorthands,

    // // Transition helpers
    // transition: transformTransition,
    // 'transition-property': transformTransition,
};

export default transforms;