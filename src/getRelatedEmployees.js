const data = require('../data/zoo_data');

const { employees } = data;

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId];

const isManager = (id) => managers.includes(id);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const nameEmployees = employees.filter((name) => name.managers.includes(managerId));
  // eslint-disable-next-line max-len
  return nameEmployees.map((collaborators) => `${collaborators.firstName} ${collaborators.lastName}`);
};

console.log(getRelatedEmployees(stephanieId));

module.exports = { isManager, getRelatedEmployees };
