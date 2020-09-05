import { stylis } from "../utils/testHelpers.js";

describe("inset logical properties to be transformed to fallback", () => {
  test("inset property", () => {
    expect(stylis("inset: 0;")).toMatchInlineSnapshot(`".test{inset:0;}"`);
    expect(stylis("inset: logical 1px;")).toMatchInlineSnapshot(
      `".test{top:1px;right:1px;bottom:1px;left:1px;}"`
    );
    expect(stylis("inset: logical 1px 2px;")).toMatchInlineSnapshot(
      `".test{top:1px;right:2px;bottom:1px;left:2px;}"`
    );
    expect(stylis("inset: logical 1px 2px 3px;")).toMatchInlineSnapshot(
      `".test{top:1px;right:2px;bottom:3px;left:2px;}"`
    );
    expect(stylis("inset: logical 1px 2px 3px 4px;")).toMatchInlineSnapshot(
      `".test{top:1px;bottom:3px;}[dir=ltr] .test{right:4px;left:2px;}[dir=rtl] .test{right:2px;left:4px;}"`
    );
  });

  test("inset-inline property", () => {
    expect(stylis("inset-inline: 5px;")).toMatchInlineSnapshot(
      `".test{inset-inline:5px;}[dir=ltr] .test{left:5px;right:5px;}[dir=rtl] .test{right:5px;left:5px;}"`
    );
    expect(stylis("inset-inline: 5px 10px;")).toMatchInlineSnapshot(
      `".test{inset-inline:5px 10px;}[dir=ltr] .test{left:5px;right:10px;}[dir=rtl] .test{right:5px;left:10px;}"`
    );

    expect(stylis("inset-inline-start: 5px;")).toMatchInlineSnapshot(
      `".test{inset-inline-start:5px;}[dir=ltr] .test{left:5px;}[dir=rtl] .test{right:5px;}"`
    );
    expect(stylis("inset-inline-end: 5px;")).toMatchInlineSnapshot(
      `".test{inset-inline-end:5px;}[dir=ltr] .test{right:5px;}[dir=rtl] .test{left:5px;}"`
    );
  });

  test("inset-block property", () => {
    expect(stylis("inset-block: 5px;")).toMatchInlineSnapshot(
      `".test{top:5px;bottom:5px;inset-block:5px;}"`
    );
    expect(stylis("inset-block: 5px 10px;")).toMatchInlineSnapshot(
      `".test{top:5px;bottom:10px;inset-block:5px 10px;}"`
    );

    expect(stylis("inset-block-start: 5px;")).toMatchInlineSnapshot(
      `".test{top:5px;inset-block-start:5px;}"`
    );
    expect(stylis("inset-block-end: 5px;")).toMatchInlineSnapshot(
      `".test{bottom:5px;inset-block-end:5px;}"`
    );
  });
});
