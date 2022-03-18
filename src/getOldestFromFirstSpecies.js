const data = require('../data/zoo_data');

const { species, employees } = data;

const getOldestFromFirstSpecies = (id) => {
  const empy = employees.find((element) => element.id === id).responsibleFor[0];
  const specie = species.find((element) => element.id === empy);
  const arrOlder = specie.residents.reduce((acc, curr) => (curr.age > acc.age ? curr : acc));
  return Object.values(arrOlder);
};

module.exports = getOldestFromFirstSpecies;
