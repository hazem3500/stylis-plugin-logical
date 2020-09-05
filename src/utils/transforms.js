import {
    transform4DimensionalDirectionalLogicalProperty,
    transform4DimensionalLogicalProperty,
    transformLogicalInlineProperty,
    transformLogicalInlinePropertyWithShorthand,
    transformLogicalProperty,
    transformPropertyWithLogicalDirectionalValues,
    transformPropertyWithLogicalValues,
} from '.';

const transforms = {
    // // Flow-Relative Values
    clear: transformPropertyWithLogicalDirectionalValues({ property: 'clear' }),
    float: transformPropertyWithLogicalDirectionalValues({ property: 'float' }),
    resize: transformPropertyWithLogicalValues({ property: 'resize' }),
    'text-align': transformPropertyWithLogicalDirectionalValues({
        property: 'text-align',
    }),

    // // Logical Height and Logical Width
    'block-size': transformLogicalProperty({
        logicalProperty: 'block-size',
        fallbackProperties: 'height',
    }),
    'max-block-size': transformLogicalProperty({
        logicalProperty: 'max-block-size',
        fallbackProperties: 'max-height',
    }),
    'min-block-size': transformLogicalProperty({
        logicalProperty: 'min-block-size',
        fallbackProperties: 'min-height',
    }),
    'inline-size': transformLogicalProperty({
        logicalProperty: 'inline-size',
        fallbackProperties: 'width',
    }),
    'max-inline-size': transformLogicalProperty({
        logicalProperty: 'max-inline-size',
        fallbackProperties: 'max-width',
    }),
    'min-inline-size': transformLogicalProperty({
        logicalProperty: 'min-inline-size',
        fallbackProperties: 'min-width',
    }),

    // // Flow-relative Margins
    margin: transform4DimensionalLogicalProperty({ property: 'margin' }),
    'margin-inline': transformLogicalInlinePropertyWithShorthand({
        logicalProperty: 'margin-inline',
        ltrStartProperty: 'margin-left',
        ltrEndProperty: 'margin-right',
        directionalSingleValueProperty: true
    }),
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
    'margin-block': transformLogicalProperty({
        logicalProperty: 'margin-block',
        fallbackProperties: ['margin-top', 'margin-bottom'],
        singleValueProperty: true
    }),
    'margin-block-end': transformLogicalProperty({
        logicalProperty: 'margin-block-end',
        fallbackProperties: 'margin-bottom',
    }),
    'margin-block-start': transformLogicalProperty({
        logicalProperty: 'margin-block-start',
        fallbackProperties: 'margin-top',
    }),

    // // Flow-relative Offsets
    inset: transform4DimensionalDirectionalLogicalProperty({
        property: 'inset',
        blockStartProperty: 'top',
        blockEndProperty: 'bottom',
        inlineStartProperty: 'left',
        inlineEndProperty: 'right',
    }),
    'inset-inline': transformLogicalInlinePropertyWithShorthand({
        logicalProperty: 'inset-inline',
        ltrStartProperty: 'left',
        ltrEndProperty: 'right',
        directionalSingleValueProperty: true
    }),
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
    'inset-block': transformLogicalProperty({
        logicalProperty: 'inset-block',
        fallbackProperties: ['top', 'bottom'],
        singleValueProperty: true,
    }),
    'inset-block-end': transformLogicalProperty({
        logicalProperty: 'inset-block-end',
        fallbackProperties: 'bottom',
    }),
    'inset-block-start': transformLogicalProperty({
        logicalProperty: 'inset-block-start',
        fallbackProperties: 'top',
    }),

    // Flow-relative Padding
    padding: transform4DimensionalLogicalProperty({ property: 'padding' }),
    'padding-inline': transformLogicalInlinePropertyWithShorthand({
        logicalProperty: 'padding-inline',
        ltrStartProperty: 'padding-left',
        ltrEndProperty: 'padding-right',
        directionalSingleValueProperty: true
    }),
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
    'padding-block': transformLogicalProperty({
        logicalProperty: 'padding-block',
        fallbackProperties: ['padding-top', 'padding-bottom'],
        singleValueProperty: true
    }),
    'padding-block-end': transformLogicalProperty({
        logicalProperty: 'padding-block-end',
        fallbackProperties: 'padding-bottom',
    }),
    'padding-block-start': transformLogicalProperty({
        logicalProperty: 'padding-block-start',
        fallbackProperties: 'padding-top',
    }),

    // // Flow-relative Borders
    'border-block': transformLogicalProperty({
        logicalProperty: 'border-block',
        fallbackProperties: ['border-top', 'border-bottom'],
    }),
    'border-block-color': transformLogicalProperty({
        logicalProperty: 'border-block',
        fallbackProperties: ['border-top-color', 'border-bottom-color'],
    }),
    'border-block-style': transformLogicalProperty({
        logicalProperty: 'border-block',
        fallbackProperties: ['border-top-style', 'border-bottom-style'],
    }),
    'border-block-width': transformLogicalProperty({
        logicalProperty: 'border-block',
        fallbackProperties: ['border-top-width', 'border-bottom-width'],
    }),
    'border-block-end': transformLogicalProperty({
        logicalProperty: 'border-block-end',
        fallbackProperties: 'border-bottom',
    }),
    'border-block-end-color': transformLogicalProperty({
        logicalProperty: 'border-block-end-color',
        fallbackProperties: 'border-bottom-color',
    }),
    'border-block-end-style': transformLogicalProperty({
        logicalProperty: 'border-block-end-style',
        fallbackProperties: 'border-bottom-style',
    }),
    'border-block-end-width': transformLogicalProperty({
        logicalProperty: 'border-block-end-width',
        fallbackProperties: 'border-bottom-width',
    }),
    'border-block-start': transformLogicalProperty({
        logicalProperty: 'border-block-start',
        fallbackProperties: 'border-top',
    }),
    'border-block-start-color': transformLogicalProperty({
        logicalProperty: 'border-block-start-color',
        fallbackProperties: 'border-top-color',
    }),
    'border-block-start-style': transformLogicalProperty({
        logicalProperty: 'border-block-start-style',
        fallbackProperties: 'border-top-style',
    }),
    'border-block-start-width': transformLogicalProperty({
        logicalProperty: 'border-block-start-width',
        fallbackProperties: 'border-top-width',
    }),
    'border-inline': transformLogicalProperty({
        logicalProperty: 'border-inline',
        fallbackProperties: ['border-left', 'border-right'],
    }),
    'border-inline-color': transformLogicalProperty({
        logicalProperty: 'border-inline-color',
        fallbackProperties: ['border-left-color', 'border-right-color'],
    }),
    'border-inline-style': transformLogicalProperty({
        logicalProperty: 'border-inline-style',
        fallbackProperties: ['border-left-style', 'border-right-style'],
    }),
    'border-inline-width': transformLogicalProperty({
        logicalProperty: 'border-inline-width',
        fallbackProperties: ['border-left-width', 'border-right-width'],
    }),
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
    'border-color': transform4DimensionalLogicalProperty({
        property: 'border-color',
    }),
    'border-style': transform4DimensionalLogicalProperty({
        property: 'border-style',
    }),
    'border-width': transform4DimensionalLogicalProperty({
        property: 'border-width',
    }),
};

export default transforms;