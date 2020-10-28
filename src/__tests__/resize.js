import { stylis } from "../utils/testHelpers.js";

test("resize with logical values to be transformed to fallback", () => {
  expect(stylis("resize: block;")).toMatchInlineSnapshot(
    `".test{resize:block;}.test{resize:vertical;}"`
  );
  expect(stylis("resize: inline;")).toMatchInlineSnapshot(
    `".test{resize:inline;}.test{resize:horizontal;}"`
  );
});
