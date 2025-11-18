const exf = require('./echo');

test('exf prints the string correct number of times', () => {
    console.log = jest.fn(); // mock console.log

    exf("hello", 3);

    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledWith("hello");
});
