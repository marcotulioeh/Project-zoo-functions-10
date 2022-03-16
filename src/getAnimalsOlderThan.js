const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, ages) => {
  const checkAgeMin = species.find(({ name }) => name === animal);
  return checkAgeMin.residents.every((ageMin) => ageMin.age >= ages);
};

module.exports = getAnimalsOlderThan;
