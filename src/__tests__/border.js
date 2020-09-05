import { stylis } from "../utils/testHelpers.js";

describe("border logical properties to be transformed to fallback", () => {
  test("border-block properties", () => {
    expect(stylis("border-block: 1px solid black;")).toMatchInlineSnapshot(
      `".test{border-top:1px solid black;border-bottom:1px solid black;border-block:1px solid black;}"`
    );
    expect(stylis("border-block-color: black;")).toMatchInlineSnapshot(
      `".test{border-top-color:black;border-bottom-color:black;border-block:black;}"`
    );
    expect(stylis("border-block-style: solid;")).toMatchInlineSnapshot(
      `".test{border-top-style:solid;border-bottom-style:solid;border-block:solid;}"`
    );
    expect(stylis("border-block-width: 1px;")).toMatchInlineSnapshot(
      `".test{border-top-width:1px;border-bottom-width:1px;border-block:1px;}"`
    );
  });

  test("border-block-start properties", () => {
    expect(
      stylis("border-block-start: 1px solid black;")
    ).toMatchInlineSnapshot(
      `".test{border-top:1px solid black;border-block-start:1px solid black;}"`
    );
    expect(stylis("border-block-start-color: black;")).toMatchInlineSnapshot(
      `".test{border-top-color:black;border-block-start-color:black;}"`
    );
    expect(stylis("border-block-start-style: solid;")).toMatchInlineSnapshot(
      `".test{border-top-style:solid;border-block-start-style:solid;}"`
    );
    expect(stylis("border-block-start-width: 1px;")).toMatchInlineSnapshot(
      `".test{border-top-width:1px;border-block-start-width:1px;}"`
    );
  });

  test("border-block-end properties", () => {
    expect(stylis("border-block-end: 1px solid black;")).toMatchInlineSnapshot(
      `".test{border-bottom:1px solid black;border-block-end:1px solid black;}"`
    );
    expect(stylis("border-block-end-color: black;")).toMatchInlineSnapshot(
      `".test{border-bottom-color:black;border-block-end-color:black;}"`
    );
    expect(stylis("border-block-end-style: solid;")).toMatchInlineSnapshot(
      `".test{border-bottom-style:solid;border-block-end-style:solid;}"`
    );
    expect(stylis("border-block-end-width: 1px;")).toMatchInlineSnapshot(
      `".test{border-bottom-width:1px;border-block-end-width:1px;}"`
    );
  });

  test("border-inline properties", () => {
    expect(stylis("border-inline: 1px solid black;")).toMatchInlineSnapshot(
      `".test{border-left:1px solid black;border-right:1px solid black;border-inline:1px solid black;}"`
    );
    expect(stylis("border-inline-color: black;")).toMatchInlineSnapshot(
      `".test{border-left-color:black;border-right-color:black;border-inline-color:black;}"`
    );
    expect(stylis("border-inline-style: solid;")).toMatchInlineSnapshot(
      `".test{border-left-style:solid;border-right-style:solid;border-inline-style:solid;}"`
    );
    expect(stylis("border-inline-width: 1px;")).toMatchInlineSnapshot(
      `".test{border-left-width:1px;border-right-width:1px;border-inline-width:1px;}"`
    );
  });

  test("border-inline-start properties", () => {
    expect(
      stylis("border-inline-start: 1px solid black;")
    ).toMatchInlineSnapshot(
      `".test{border-inline-start:1px solid black;}[dir=ltr] .test{border-left:1px solid black;}[dir=rtl] .test{border-right:1px solid black;}"`
    );
    expect(stylis("border-inline-start-color: black;")).toMatchInlineSnapshot(
      `".test{border-inline-start-color:black;}[dir=ltr] .test{border-left-color:black;}[dir=rtl] .test{border-right-color:black;}"`
    );
    expect(stylis("border-inline-start-style: solid;")).toMatchInlineSnapshot(
      `".test{border-inline-start-style:solid;}[dir=ltr] .test{border-left-style:solid;}[dir=rtl] .test{border-right-style:solid;}"`
    );
    expect(stylis("border-inline-start-width: 1px;")).toMatchInlineSnapshot(
      `".test{border-inline-start-width:1px;}[dir=ltr] .test{border-left-width:1px;}[dir=rtl] .test{border-right-width:1px;}"`
    );
  });

  test("border-inline-end properties", () => {
    expect(stylis("border-inline-end: 1px solid black;")).toMatchInlineSnapshot(
      `".test{border-inline-end:1px solid black;}[dir=ltr] .test{border-right:1px solid black;}[dir=rtl] .test{border-left:1px solid black;}"`
    );
    expect(stylis("border-inline-end-color: black;")).toMatchInlineSnapshot(
      `".test{border-inline-end-color:black;}[dir=ltr] .test{border-right-color:black;}[dir=rtl] .test{border-left-color:black;}"`
    );
    expect(stylis("border-inline-end-style: solid;")).toMatchInlineSnapshot(
      `".test{border-inline-end-style:solid;}[dir=ltr] .test{border-right-style:solid;}[dir=rtl] .test{border-left-style:solid;}"`
    );
    expect(stylis("border-inline-end-width: 1px;")).toMatchInlineSnapshot(
      `".test{border-inline-end-width:1px;}[dir=ltr] .test{border-right-width:1px;}[dir=rtl] .test{border-left-width:1px;}"`
    );
  });

  test("border radius logical properties", () => {
    expect(stylis("border-start-start-radius: 25px;")).toMatchInlineSnapshot(
      `".test{border-start-start-radius:25px;}[dir=ltr] .test{border-top-left-radius:25px;}[dir=rtl] .test{border-top-right-radius:25px;}"`
    );
    expect(stylis("border-start-end-radius: 25px;")).toMatchInlineSnapshot(
      `".test{border-start-end-radius:25px;}[dir=ltr] .test{border-top-right-radius:25px;}[dir=rtl] .test{border-top-left-radius:25px;}"`
    );
    expect(stylis("border-end-start-radius: 25px;")).toMatchInlineSnapshot(
      `".test{border-end-start-radius:25px;}[dir=ltr] .test{border-bottom-left-radius:25px;}[dir=rtl] .test{border-bottom-right-radius:25px;}"`
    );
    expect(stylis("border-end-end-radius: 25px;")).toMatchInlineSnapshot(
      `".test{border-end-end-radius:25px;}[dir=ltr] .test{border-bottom-right-radius:25px;}[dir=rtl] .test{border-bottom-left-radius:25px;}"`
    );
  });

  test("border-color property", () => {
    expect(stylis("border-color: black;")).toMatchInlineSnapshot(
      `".test{border-color:black;}"`
    );
    expect(
      stylis("border-color: blue red yellow green;")
    ).toMatchInlineSnapshot(`".test{border-color:blue red yellow green;}"`);
    expect(stylis("border-color: logical black;")).toMatchInlineSnapshot(
      `".test{border-color:black;border-color:logical black;}"`
    );
    expect(stylis("border-color: logical blue red;")).toMatchInlineSnapshot(
      `".test{border-color:blue red;border-color:logical blue red;}"`
    );
    expect(
      stylis("border-color: logical blue red yellow;")
    ).toMatchInlineSnapshot(
      `".test{border-color:blue red yellow;border-color:logical blue red yellow;}"`
    );
    expect(
      stylis("border-color: logical blue red yellow green;")
    ).toMatchInlineSnapshot(
      `".test{border-color:logical blue red yellow green;}[dir=ltr] .test{border-color:blue green yellow red;}[dir=rtl] .test{border-color:blue red yellow green;}"`
    );
  });

  test("border-style property", () => {
    expect(stylis("border-style: solid;")).toMatchInlineSnapshot(
      `".test{border-style:solid;}"`
    );
    expect(
      stylis("border-style: solid dashed dotted double;")
    ).toMatchInlineSnapshot(
      `".test{border-style:solid dashed dotted double;}"`
    );
    expect(stylis("border-style: logical solid;")).toMatchInlineSnapshot(
      `".test{border-style:solid;border-style:logical solid;}"`
    );
    expect(stylis("border-style: logical solid dashed;")).toMatchInlineSnapshot(
      `".test{border-style:solid dashed;border-style:logical solid dashed;}"`
    );
    expect(
      stylis("border-style: logical solid dashed dotted;")
    ).toMatchInlineSnapshot(
      `".test{border-style:solid dashed dotted;border-style:logical solid dashed dotted;}"`
    );
    expect(
      stylis("border-style: logical solid dashed dotted double;")
    ).toMatchInlineSnapshot(
      `".test{border-style:logical solid dashed dotted double;}[dir=ltr] .test{border-style:solid double dotted dashed;}[dir=rtl] .test{border-style:solid dashed dotted double;}"`
    );
  });

  test("border-width property", () => {
    expect(stylis("border-width: 1px;")).toMatchInlineSnapshot(
      `".test{border-width:1px;}"`
    );
    expect(stylis("border-width: 1px 2px 3px 4px;")).toMatchInlineSnapshot(
      `".test{border-width:1px 2px 3px 4px;}"`
    );
    expect(stylis("border-width: logical 1px;")).toMatchInlineSnapshot(
      `".test{border-width:1px;border-width:logical 1px;}"`
    );
    expect(stylis("border-width: logical 1px 2px;")).toMatchInlineSnapshot(
      `".test{border-width:1px 2px;border-width:logical 1px 2px;}"`
    );
    expect(stylis("border-width: logical 1px 2px 3px;")).toMatchInlineSnapshot(
      `".test{border-width:1px 2px 3px;border-width:logical 1px 2px 3px;}"`
    );
    expect(
      stylis("border-width: logical 1px 2px 3px 4px;")
    ).toMatchInlineSnapshot(
      `".test{border-width:logical 1px 2px 3px 4px;}[dir=ltr] .test{border-width:1px 4px 3px 2px;}[dir=rtl] .test{border-width:1px 2px 3px 4px;}"`
    );
  });
});
