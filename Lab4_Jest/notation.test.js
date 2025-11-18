const { mean } = require('./notation');

test('calculates mean correctly', () => {
    expect(mean([1, 2, 3, 4])).toBe(2.5);
});
