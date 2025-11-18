const chunk = require('./chunk');

test('chunk splits an array into multiple arrays of the given size', () => {
  const arr = [1, 2, 3, 4];
  const size = 2;
  const result = chunk(arr, size);

  expect(result).toEqual([[1, 2], [3, 4]]);
});

test('chunk handles arrays not evenly divisible by size', () => {
  const arr = [1, 2, 3];
  const size = 2;
  const result = chunk(arr, size);

  expect(result).toEqual([[1, 2], [3]]);
});

test('chunk returns an empty array when input is empty', () => {
  const result = chunk([], 3);
  expect(result).toEqual([]);
});

test('chunk size larger than array returns whole array in one chunk', () => {
  const arr = [1, 2, 3];
  const result = chunk(arr, 10);
  expect(result).toEqual([[1, 2, 3]]);
});
