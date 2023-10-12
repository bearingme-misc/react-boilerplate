/**
 * Returns a random floating point number in the range [0.0, 1.0).
 * Equivalent to Python's random.random().
 *
 * @returns - A random floating point number between 0 (inclusive) and 1 (exclusive).
 */
function random(): number {
  return Math.random();
}

/**
 * Returns a random integer between the specified values.
 * The value is no lower than `min`, and is less than or equal to `max`.
 * Equivalent to Python's random.randint(a, b).
 *
 * @param min - The lowest value in the range.
 * @param max - The highest value in the range.
 * @returns - A random integer between `min` and `max`, inclusive.
 */
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random element from an array.
 * Equivalent to Python's random.choice(seq).
 *
 * @param items - The array from which to select a random element.
 * @returns - A random element from the `items` array.
 */
function choice<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

/**
 * Returns a new array with the elements of the input array shuffled.
 *
 * @param items - The array to be shuffled.
 * @returns - A new array with the elements of `items` shuffled.
 */
function shuffle<T>(items: T[]): T[] {
  // copy the array to avoid mutating the original
  const result = [...items];

  // Fisher-Yates shuffle
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/**
 * Returns a new array with a specified number of unique elements
 * randomly selected from the input array.
 * Equivalent to Python's random.sample(population, k).
 *
 * @param items - The array from which to sample.
 * @param n - The number of unique elements to select.
 * @returns - A new array containing `n` unique elements from `items`.
 * @throws Will throw an error if `n` is greater than the length of `items`.
 */
function sample<T>(items: T[], n: number): T[] {
  if (n > items.length) {
    throw new Error("Sample larger than population or is negative");
  }
  const result = [];
  const copy = [...items];
  for (let i = 0; i < n; i++) {
    const j = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(j, 1)[0]);
  }
  return result;
}

export { random, randInt, choice, shuffle, sample };
