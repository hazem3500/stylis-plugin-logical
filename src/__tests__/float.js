import { stylis } from "../utils/testHelpers.js";

test("float with logical values to be transformed to fallback", () => {
  expect(stylis("float: left;")).toMatchInlineSnapshot(`".test{float:left;}"`);
  expect(stylis("float: right;")).toMatchInlineSnapshot(
    `".test{float:right;}"`
  );
  expect(stylis("float: inline-start;")).toMatchInlineSnapshot(
    `".test{float:inline-start;}[dir=ltr] .test{float:left;}[dir=rtl] .test{float:right;}"`
  );
  expect(stylis("float: inline-end;")).toMatchInlineSnapshot(
    `".test{float:inline-end;}[dir=ltr] .test{float:right;}[dir=rtl] .test{float:left;}"`
  );
});
