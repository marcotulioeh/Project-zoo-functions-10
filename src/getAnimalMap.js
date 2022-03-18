const data = require('../data/zoo_data');

const { species } = data;

const arrayAnimal = () => {
  const mapLocation = species.map((loc) => loc.location);
  return mapLocation.filter((loc, i) => mapLocation.indexOf(loc) === i);
};

const arrAniaml = arrayAnimal();

const locAnimal = (locatinAnim) => {
  const object = {};
  locatinAnim.forEach((loc) => {
    object[loc] = species.filter((anim) => anim.location === loc).map((nameAnim) => nameAnim.name);
  });
  return object;
};

const arrLocAnimal = locAnimal(arrAniaml);

const arrayNameAnimal = (arrayLocations) => {
  const object = {};
  arrayLocations.forEach((loc) => {
    object[loc] = species.filter((anim) => loc === anim.location).map((nameAnim) => {
      const objctResult = {};
      objctResult[nameAnim.name] = nameAnim.residents.map((res) => res.name);
      return objctResult;
    });
  });
  return object;
};

const arrNameAnim = arrayNameAnimal(arrAniaml);

const nameSexAnimal = (arrayLocations, sex) => {
  const result = {};
  arrayLocations.forEach((loc) => {
    result[loc] = species.filter((spc) => loc === spc.location).map((mapName) => {
      const objResidents = {};
      objResidents[mapName.name] = mapName.residents.filter((res) => res.sex === sex)
        .map((res) => res.name);
      return objResidents;
    });
  });
  return result;
};

const getAnimalMap = ({ includeNames, sex, sorted } = 0) => {
  if (!includeNames) return arrLocAnimal;
  let result = arrNameAnim;
  if (sex) {
    result = nameSexAnimal(arrAniaml, sex);
  }
  if (sorted) {
    arrAniaml.forEach((loc) => {
      result[loc].forEach((element) => element[Object.keys(element)[0]].sort());
    });
  }
  return result;
};

module.exports = getAnimalMap;
