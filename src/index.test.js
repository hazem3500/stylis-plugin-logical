import { pluginWithPropertyContext } from './index';

describe('padding logical properties to be transformed', () => {
    test("padding-inline-end to be transformed to fallback", () => {
        expect(
            pluginWithPropertyContext(
                'padding-inline-end: 50px;'
            )
        ).toMatchSnapshot();
    });
    test("padding-inline-start to be transformed to fallback", () => {
        expect(
            pluginWithPropertyContext(
                'padding-inline-start: 50px;'
            )
        ).toMatchSnapshot();
    });
})