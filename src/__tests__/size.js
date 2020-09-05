import { stylis } from "../utils/testHelpers.js";

test("size logical properties to be transformed to fallback", () => {
  expect(stylis("block-size: 100px;")).toMatchInlineSnapshot(
    `".test{height:100px;block-size:100px;}"`
  );
  expect(stylis("inline-size: 100px;")).toMatchInlineSnapshot(
    `".test{width:100px;inline-size:100px;}"`
  );

  expect(stylis("max-block-size: 100px;")).toMatchInlineSnapshot(
    `".test{max-height:100px;max-block-size:100px;}"`
  );
  expect(stylis("max-inline-size: 100px;")).toMatchInlineSnapshot(
    `".test{max-width:100px;max-inline-size:100px;}"`
  );

  expect(stylis("min-block-size: 100px;")).toMatchInlineSnapshot(
    `".test{min-height:100px;min-block-size:100px;}"`
  );
  expect(stylis("min-inline-size: 100px;")).toMatchInlineSnapshot(
    `".test{min-width:100px;min-inline-size:100px;}"`
  );
});
