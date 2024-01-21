const { legsInTheHouse } = require('../src/index')


it("should return false if the input is greater than 100", () => {
	expect(legsInTheHouse(101)).toBe(false);
});

it("should return false if the input is less than 2", () => {
	expect(legsInTheHouse(1)).toBe(false);
});
