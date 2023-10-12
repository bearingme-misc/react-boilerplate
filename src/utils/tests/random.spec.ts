import { random, randInt, choice, shuffle, sample } from "../random";

describe("Random Utilities", () => {
  test("random should return a number between 0 and 1", () => {
    const value = random();

    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(1);
  });

  test("randInt should return a number within specified range", () => {
    const min = 1;
    const max = 10;
    const value = randInt(min, max);

    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
  });

  test("choice should return a random element from array", () => {
    const arr = [1, 2, 3, 4, 5];
    const value = choice(arr);

    expect(arr).toContain(value);
  });

  test("shuffle should return a shuffled array", () => {
    const arr = [1, 2, 3, 4, 5];
    const shuffledArr = shuffle(arr);

    expect(shuffledArr).not.toEqual(arr);
    expect(shuffledArr).toHaveLength(arr.length);
    expect(shuffledArr.sort()).toEqual(arr.sort());
  });

  test("sample should return a specified number of unique elements from array", () => {
    const arr = [1, 2, 3, 4, 5];
    const sampledArr = sample(arr, 3);

    expect(sampledArr).toHaveLength(3);
    sampledArr.forEach((item) => {
      expect(arr).toContain(item);
    });
  });

  test("sample should throw an error if n is greater than array length", () => {
    const arr = [1, 2, 3, 4, 5];

    expect(() => sample(arr, 6)).toThrow(
      "Sample larger than population or is negative",
    );
  });
});
