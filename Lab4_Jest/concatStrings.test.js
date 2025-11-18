const concatStrings = require('./concatStrings');

test('concatStrings concatenates array elements', () => {
    const colors = ["Red", "Green", "White", "Black"];
    expect(concatStrings(colors)).toBe("RedGreenWhiteBlack");
    expect(concatStrings(colors, ',')).toBe("Red,Green,White,Black");
});
