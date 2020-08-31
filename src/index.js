import {compile} from 'stylis'
import transforms from './utils/transforms';

export const STYLIS_CONTEXTS = {
    POST_PROCESS: -2,
    PREPARATION: -1,
    NEWLINE: 0,
    PROPERTY: 1,
    SELECTOR_BLOCK: 2,
    AT_RULE: 3
}

export default function stylisPluginLogical(context, content) {
    if (context === STYLIS_CONTEXTS.PROPERTY) {
        const propertyAST = compile(content)[0];
        if (transforms.hasOwnProperty(propertyAST.props)) {
            return transforms[propertyAST.props](propertyAST.children);
        }
        return content;
    }
}


export function pluginWithPropertyContext(content) {
    return stylisPluginLogical(STYLIS_CONTEXTS.PROPERTY, content);
}