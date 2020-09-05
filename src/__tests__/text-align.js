import { stylis } from "../utils/testHelpers.js";

test("text-align with logical values to be transformed to fallback", () => {
  expect(stylis("text-align: left;")).toMatchInlineSnapshot(
    `".test{text-align:left;}"`
  );
  expect(stylis("text-align: right;")).toMatchInlineSnapshot(
    `".test{text-align:right;}"`
  );
  expect(stylis("text-align: start;")).toMatchInlineSnapshot(
    `".test{text-align:start;}[dir=ltr] .test{text-align:left;}[dir=rtl] .test{text-align:right;}"`
  );
  expect(stylis("text-align: end;")).toMatchInlineSnapshot(
    `".test{text-align:end;}[dir=ltr] .test{text-align:right;}[dir=rtl] .test{text-align:left;}"`
  );
});
