import { serialize, compile, middleware } from 'stylis';
import stylisPluginLogical from '../index';

export const stylis = (content) =>
    serialize(compile(`.test {${content}}`), middleware([stylisPluginLogical]));
