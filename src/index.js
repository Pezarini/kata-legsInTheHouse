const legsInTheHouse = (legsInTheHouse) => {

	if (legsInTheHouse < 2 || legsInTheHouse > 100) {
		return false;
	}

	let personsWithoutCatsInTheHouse = 0;
	let legsOfPersons = 0;
	while (legsOfPersons < legsInTheHouse) {
		legsOfPersons += 2;
		personsWithoutCatsInTheHouse += 1;
	}

	let personsWithCatsInTheHouse = 0;
	let legsOfPersonsWithCats = 0;
	while (legsOfPersonsWithCats < legsInTheHouse) {
		legsOfPersonsWithCats += 2 + 4;
		personsWithCatsInTheHouse += 1;
	}

	if (legsInTheHouse > 5) {
		return [personsWithCatsInTheHouse, personsWithoutCatsInTheHouse];
	}

	return [personsWithoutCatsInTheHouse];
};

module.exports = {
	legsInTheHouse
}