import { compile, serialize, middleware, stringify } from 'stylis'
import transforms from './utils/transforms';

const stylis = (content) => serialize(compile(content), stringify);

function generateRuleFallback({ children, selector }) {
    const logicalProperties = children.filter(
        (child) => transforms[child.props]
    );
    if (logicalProperties.length) {
        let fallback = ``;
        logicalProperties.forEach((property) => {
            fallback = fallback.concat(
                transforms[property.props](property.children)
            );
        });
        return stylis(`${selector} {${fallback}}`);
    }
}


export default function stylisPluginLogical(node) {
    if (node.type === 'rule') {
        return generateRuleFallback({
            children: node.children,
            selector: node.props,
        });
    }
}