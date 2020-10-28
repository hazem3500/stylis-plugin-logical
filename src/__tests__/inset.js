import { stylis } from "../utils/testHelpers.js";

describe("inset logical properties to be transformed to fallback", () => {
  test("inset property", () => {
    expect(stylis("inset: 0;")).toMatchInlineSnapshot(
      `".test{inset:0;}.test{top:0;bottom:0;left:0;right:0;}"`
    );
    expect(stylis("inset: logical 1px;")).toMatchInlineSnapshot(
      `".test{inset:logical 1px;}.test{top:1px;bottom:1px;left:1px;right:1px;}"`
    );
    expect(stylis("inset: logical 1px 2px;")).toMatchInlineSnapshot(
      `".test{inset:logical 1px 2px;}.test{top:1px;bottom:1px;left:2px;right:2px;}"`
    );
    expect(stylis("inset: logical 1px 2px 3px;")).toMatchInlineSnapshot(
      `".test{inset:logical 1px 2px 3px;}.test{top:1px;bottom:3px;left:2px;right:2px;}"`
    );
    expect(stylis("inset: logical 1px 2px 3px 4px;")).toMatchInlineSnapshot(
      `".test{inset:logical 1px 2px 3px 4px;}.test{top:1px;bottom:3px;}[dir=ltr] .test{left:2px;right:4px;}[dir=rtl] .test{left:4px;right:2px;}"`
    );
  });

  test("inset-inline property", () => {
    expect(stylis("inset-inline: 5px;")).toMatchInlineSnapshot(
      `".test{inset-inline:5px;}.test{left:5px;right:5px;}"`
    );
    expect(stylis("inset-inline: 5px 10px;")).toMatchInlineSnapshot(
      `".test{inset-inline:5px 10px;}[dir=ltr] .test{left:5px;right:10px;}[dir=rtl] .test{right:5px;left:10px;}"`
    );

    expect(stylis("inset-inline-start: 5px;")).toMatchInlineSnapshot(
      `".test{inset-inline-start:5px;}[dir=ltr] .test{left:5px;}[dir=rtl] .test{undefined:5px;}"`
    );
    expect(stylis("inset-inline-end: 5px;")).toMatchInlineSnapshot(
      `".test{inset-inline-end:5px;}[dir=ltr] .test{right:5px;}[dir=rtl] .test{undefined:5px;}"`
    );
  });

  test("inset-block property", () => {
    expect(stylis("inset-block: 5px;")).toMatchInlineSnapshot(
      `".test{inset-block:5px;}.test{top:5px;bottom:5px;}"`
    );
    expect(stylis("inset-block: 5px 10px;")).toMatchInlineSnapshot(
      `".test{inset-block:5px 10px;}.test{top:5px 10px;bottom:5px 10px;}"`
    );

    expect(stylis("inset-block-start: 5px;")).toMatchInlineSnapshot(
      `".test{inset-block-start:5px;}.test{top:5px;}"`
    );
    expect(stylis("inset-block-end: 5px;")).toMatchInlineSnapshot(
      `".test{inset-block-end:5px;}.test{bottom:5px;}"`
    );
  });
});
