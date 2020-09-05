import { stylis } from "../utils/testHelpers.js";

test("resize with logical values to be transformed to fallback", () => {
  expect(stylis("resize: block;")).toMatchInlineSnapshot(
    `".test{resize:vertical;resize:block;}"`
  );
  expect(stylis("resize: inline;")).toMatchInlineSnapshot(
    `".test{resize:horizontal;resize:inline;}"`
  );
});
