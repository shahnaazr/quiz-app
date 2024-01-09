import { shuffleArray } from "../helpers";

describe("shuffleArray", () => {
  it("shuffles the array", () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffleArray(originalArray);
    expect(shuffledArray).not.toEqual(originalArray);
    expect(shuffledArray).toHaveLength(originalArray.length);
  });

  it("handles an empty array", () => {
    const emptyArray: number[] = [];
    const shuffledArray = shuffleArray(emptyArray.slice());
    expect(shuffledArray).toEqual([]);
  });
});
