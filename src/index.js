import transforms from './utils/transforms';
import { generateStyles } from './utils/index';

export default function LogicalPlugin() {
    let skip = false;
    let store = {};

    function generateFallbackStyles({ selector, property, value }) {
        if (!transforms[property]) return null;
        if (!store[selector]) store[selector] = [];
        store[selector].push(transforms[property](value));
    }

    return function (
        context,
        content,
        selectors,
        parents,
        line,
        column,
        length
    ) {
        if (skip) return;
        switch (context) {
            case 1:
                var index = content.indexOf(':');
                var property = content.substring(0, index);
                var value = content.substring(index + 1).trim();
                return generateFallbackStyles({
                    selector: selectors.join(' '),
                    property,
                    value,
                });
            case -2:
                skip = true;
                const logicalStyles = generateLogicalStyles(store);
                const finalStyles = content + this('', logicalStyles);
                skip = false;
                store = {};
                return finalStyles;
            default:
                break;
        }
    };
}
function generateLogicalStyles(store) {
    let logicalStyles = ``;
    Object.keys(store).forEach((selector) => {
        logicalStyles += store[selector]
            .map((style) => generateStyles(selector, style))
            .join(' ');
    });

    return logicalStyles;
}
