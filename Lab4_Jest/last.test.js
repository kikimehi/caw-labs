const last = require('./last');

test('last returns last n elements', () => {
    expect(last([1,2,3,4,5], 2)).toEqual([4,5]);
    expect(last([1,2,3])).toBe(3);
    expect(last(null, 2)).toEqual([]);
});
