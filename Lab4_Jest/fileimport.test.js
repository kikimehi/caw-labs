// fileimport.test.js
const { mean } = require('./notation');

describe('mean function', () => {
    test('calculates mean for scores1 correctly', () => {
        const scores1 = [10, 20, 100, 40, 50];
        expect(mean(scores1)).toBe(44); // (10+20+100+40+50)/5 = 44
    });

    test('calculates mean for scores2 correctly', () => {
        const scores2 = [15, 25, 35, 45];
        expect(mean(scores2)).toBe(30); // (15+25+35+45)/4 = 30
    });
});
