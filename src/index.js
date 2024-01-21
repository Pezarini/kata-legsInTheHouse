const legsInTheHouse = (legsInTheHouse) => {

	if (legsInTheHouse < 2 || legsInTheHouse > 100) {
		return false;
	}
	
	let persons = 0;
	let legsOfPersons = 0;
	while (legsOfPersons < legsInTheHouse) {
		legsOfPersons += 2
		persons += 1;
	}

	return [persons];
};

module.exports = {
	legsInTheHouse
}