import { getNumberIntervals } from "../common/util";

test("getNumberIntervals correctly identifies overlapping and not included ranges when given different random input range", () => {
  const allInputGroup = [
    [1, 5],
    [3, 8],
    [10, 15],
  ];
  const result = getNumberIntervals(allInputGroup);

  // check result structure
  expect(result).toHaveProperty("overlap");
  expect(result).toHaveProperty("notInclude");

  // check overlap array contents
  expect(result.overlap).toEqual([[3, 5]]);

  // check notInclude array contents
  expect(result.notInclude).toEqual([
    [0, 0],
    [9, 9],
    [16, 20],
  ]);
});

test("getNumberIntervals correctly identifies overlapping and not included ranges when given a single input range [0, 20]", () => {
  const allInputGroup = [[0, 20]];
  const result = getNumberIntervals(allInputGroup);

  // check result structure
  expect(result).toHaveProperty("overlap");
  expect(result).toHaveProperty("notInclude");

  // check overlap array contents
  expect(result.overlap).toEqual([]);

  // check notInclude array contents
  expect(result.notInclude).toEqual([]);
});
