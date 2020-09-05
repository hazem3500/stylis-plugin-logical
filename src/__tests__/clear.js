import { stylis } from "../utils/testHelpers.js";

test("clear with logical values to be transformed to fallback", () => {
  expect(stylis("clear: both;")).toMatchInlineSnapshot(`".test{clear:both;}"`);
  expect(stylis("clear: left;")).toMatchInlineSnapshot(`".test{clear:left;}"`);
  expect(stylis("clear: right;")).toMatchInlineSnapshot(
    `".test{clear:right;}"`
  );
  expect(stylis("clear: inline-start;")).toMatchInlineSnapshot(
    `".test{clear:inline-start;}[dir=ltr] .test{clear:left;}[dir=rtl] .test{clear:right;}"`
  );
  expect(stylis("clear: inline-end;")).toMatchInlineSnapshot(
    `".test{clear:inline-end;}[dir=ltr] .test{clear:right;}[dir=rtl] .test{clear:left;}"`
  );
});
