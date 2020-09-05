import { stylis } from "../utils/testHelpers.js";

describe("margin logical properties to be transformed to fallback", () => {
  test("margin property", () => {
    expect(stylis("margin: 0;")).toMatchInlineSnapshot(`".test{margin:0;}"`);
    expect(stylis("margin: logical 1px;")).toMatchInlineSnapshot(
      `".test{margin:1px;margin:logical 1px;}"`
    );
    expect(stylis("margin: logical 1px 2px;")).toMatchInlineSnapshot(
      `".test{margin:1px 2px;margin:logical 1px 2px;}"`
    );
    expect(stylis("margin: logical 1px 2px 3px;")).toMatchInlineSnapshot(
      `".test{margin:1px 2px 3px;margin:logical 1px 2px 3px;}"`
    );
    expect(stylis("margin: logical 1px 2px 3px 4px;")).toMatchInlineSnapshot(
      `".test{margin:logical 1px 2px 3px 4px;}[dir=ltr] .test{margin:1px 4px 3px 2px;}[dir=rtl] .test{margin:1px 2px 3px 4px;}"`
    );
  });

  test("margin-inline property", () => {
    expect(stylis("margin-inline: 5px;")).toMatchInlineSnapshot(
      `".test{margin-inline:5px;}[dir=ltr] .test{margin-left:5px;margin-right:5px;}[dir=rtl] .test{margin-right:5px;margin-left:5px;}"`
    );
    expect(stylis("margin-inline: 5px 10px;")).toMatchInlineSnapshot(
      `".test{margin-inline:5px 10px;}[dir=ltr] .test{margin-left:5px;margin-right:10px;}[dir=rtl] .test{margin-right:5px;margin-left:10px;}"`
    );

    expect(stylis("margin-inline-start: 5px;")).toMatchInlineSnapshot(
      `".test{margin-inline-start:5px;}[dir=ltr] .test{margin-left:5px;}[dir=rtl] .test{margin-right:5px;}"`
    );
    expect(stylis("margin-inline-end: 5px;")).toMatchInlineSnapshot(
      `".test{margin-inline-end:5px;}[dir=ltr] .test{margin-right:5px;}[dir=rtl] .test{margin-left:5px;}"`
    );
  });

  test("margin-block property", () => {
    expect(stylis("margin-block: 5px;")).toMatchInlineSnapshot(
      `".test{margin-top:5px;margin-bottom:5px;margin-block:5px;}"`
    );
    expect(stylis("margin-block: 5px 10px;")).toMatchInlineSnapshot(
      `".test{margin-top:5px;margin-bottom:10px;margin-block:5px 10px;}"`
    );

    expect(stylis("margin-block-start: 5px;")).toMatchInlineSnapshot(
      `".test{margin-top:5px;margin-block-start:5px;}"`
    );
    expect(stylis("margin-block-end: 5px;")).toMatchInlineSnapshot(
      `".test{margin-bottom:5px;margin-block-end:5px;}"`
    );
  });
});
