import { stylis } from "../utils/testHelpers.js";

test("size logical properties to be transformed to fallback", () => {
  expect(stylis("block-size: 100px;")).toMatchInlineSnapshot(
    `".test{block-size:100px;}.test{height:100px;}"`
  );
  expect(stylis("inline-size: 100px;")).toMatchInlineSnapshot(
    `".test{inline-size:100px;}.test{width:100px;}"`
  );

  expect(stylis("max-block-size: 100px;")).toMatchInlineSnapshot(
    `".test{max-block-size:100px;}.test{max-height:100px;}"`
  );
  expect(stylis("max-inline-size: 100px;")).toMatchInlineSnapshot(
    `".test{max-inline-size:100px;}.test{max-width:100px;}"`
  );

  expect(stylis("min-block-size: 100px;")).toMatchInlineSnapshot(
    `".test{min-block-size:100px;}.test{min-height:100px;}"`
  );
  expect(stylis("min-inline-size: 100px;")).toMatchInlineSnapshot(
    `".test{min-inline-size:100px;}.test{min-width:100px;}"`
  );
});
