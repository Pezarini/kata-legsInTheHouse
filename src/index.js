const howManyPeopleAreThereInTheHouse = (hasCats, legsInTheHouse) => {
	let personsInTheHouse = 0;
	let legsOfPerson = 0;

	while (legsOfPerson < legsInTheHouse) {
		legsOfPerson += 2 + hasCats;
		personsInTheHouse += 1;
	}

	return personsInTheHouse;
}
const legsInTheHouse = (legsInTheHouse) => {

	if (legsInTheHouse < 2 || legsInTheHouse > 100) {
		return false;
	}

	const personsWithoutCatsInTheHouse = howManyPeopleAreThereInTheHouse(0, legsInTheHouse);
	const personsWithCatsInTheHouse = howManyPeopleAreThereInTheHouse(4, legsInTheHouse);
	
	if (legsInTheHouse > 5) {
		return [personsWithCatsInTheHouse, personsWithoutCatsInTheHouse];
	}

	return [personsWithoutCatsInTheHouse];
};

module.exports = {
	legsInTheHouse
}