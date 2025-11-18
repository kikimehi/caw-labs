const first = require('./first');

test('first returns first n elements', () => {
    expect(first([1,2,3,4,5], 3)).toEqual([1,2,3]);
    expect(first([1,2,3], 0)).toEqual([]);
    expect(first([1,2,3])).toBe(1);
    expect(first(null, 3)).toEqual([]);
});
