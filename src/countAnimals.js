const data = require('../data/zoo_data');

const { species } = data;

const countAnimals = ({ specie = 0, sex = 0 } = {}) => {
  if (!specie && !sex) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const specieFind = species.find((element) => element.name === specie).residents;
  if (sex === 0) return specieFind.length;
  return specieFind.filter((element) => element.sex === sex).length;
};

module.exports = countAnimals;
