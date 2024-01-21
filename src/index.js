const legsInTheHouse = (legsInTheHouse) => {

	return legsInTheHouse < 2 || legsInTheHouse > 100 ? false : true;
};

module.exports = {
	legsInTheHouse
}