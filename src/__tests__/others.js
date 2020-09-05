import { stylis } from "../utils/testHelpers.js";

test("nested logical properties to be transformed", () => {
  expect(
    stylis(`
            .selector {
                margin-inline-start: 50px;
                block-size: 50px;
                .nested {
                    padding-inline-end: 40px;
                }
            }
        `)
  ).toMatchInlineSnapshot(
    `".test .selector{margin-inline-start:50px;}[dir=ltr] .test .selector{margin-left:50px;}[dir=rtl] .test .selector{margin-right:50px;}.test .selector{height:50px;block-size:50px;}.test .selector .nested{padding-inline-end:40px;}[dir=ltr] .test .selector .nested{padding-right:40px;}[dir=rtl] .test .selector .nested{padding-left:40px;}"`
  );
});
