import { addComma } from "../common/util";

test("addComma correctly formats money with commas", () => {
  // test 1 : if number is integer
  expect(addComma(1000)).toBe("1,000");

  // test 2 : if number with decimal point
  expect(addComma(12345.67)).toBe("12,345.67");

  // test 3 : if number is negative
  expect(addComma(-9876543.21)).toBe("-9,876,543.21");

  // test 4 : if number is zero
  expect(addComma(0)).toBe("0");

  // test 5 : if number is string
  expect(addComma("123456789")).toBe("123,456,789");
});
