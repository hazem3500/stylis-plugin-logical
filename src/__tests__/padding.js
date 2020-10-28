import { stylis } from "../utils/testHelpers.js";

describe("padding logical properties to be transformed to fallback", () => {
  test("padding property", () => {
    expect(stylis("padding: 0;")).toMatchInlineSnapshot(`".test{padding:0;}"`);
    expect(stylis("padding: logical 1px;")).toMatchInlineSnapshot(
      `".test{padding:logical 1px;}.test{padding:1px;}"`
    );
    expect(stylis("padding: logical 1px 2px;")).toMatchInlineSnapshot(
      `".test{padding:logical 1px 2px;}.test{padding:1px 2px;}"`
    );
    expect(stylis("padding: logical 1px 2px 3px;")).toMatchInlineSnapshot(
      `".test{padding:logical 1px 2px 3px;}.test{padding:1px 2px 3px;}"`
    );
    expect(stylis("padding: logical 1px 2px 3px 4px;")).toMatchInlineSnapshot(
      `".test{padding:logical 1px 2px 3px 4px;}[dir=ltr] .test{padding:1px 4px 3px 2px;}[dir=rtl] .test{padding:1px 2px 3px 4px;}"`
    );
  });

  test("padding-inline property", () => {
    expect(stylis("padding-inline: 5px;")).toMatchInlineSnapshot(
      `".test{padding-inline:5px;}.test{padding-left:5px;padding-right:5px;}"`
    );
    expect(stylis("padding-inline: 5px 10px;")).toMatchInlineSnapshot(
      `".test{padding-inline:5px 10px;}[dir=ltr] .test{padding-left:5px;padding-right:10px;}[dir=rtl] .test{padding-right:5px;padding-left:10px;}"`
    );

    expect(stylis("padding-inline-start: 5px;")).toMatchInlineSnapshot(
      `".test{padding-inline-start:5px;}[dir=ltr] .test{padding-left:5px;}[dir=rtl] .test{padding-right:5px;}"`
    );
    expect(stylis("padding-inline-end: 5px;")).toMatchInlineSnapshot(
      `".test{padding-inline-end:5px;}[dir=ltr] .test{padding-right:5px;}[dir=rtl] .test{padding-left:5px;}"`
    );
  });

  test("padding-block property", () => {
    expect(stylis("padding-block: 5px;")).toMatchInlineSnapshot(
      `".test{padding-block:5px;}.test{padding-top:5px;padding-bottom:5px;}"`
    );
    expect(stylis("padding-block: 5px 10px;")).toMatchInlineSnapshot(
      `".test{padding-block:5px 10px;}.test{padding-top:5px 10px;padding-bottom:5px 10px;}"`
    );

    expect(stylis("padding-block-start: 5px;")).toMatchInlineSnapshot(
      `".test{padding-block-start:5px;}.test{padding-top:5px;}"`
    );
    expect(stylis("padding-block-end: 5px;")).toMatchInlineSnapshot(
      `".test{padding-block-end:5px;}.test{padding-bottom:5px;}"`
    );
  });
});
