const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.some((element) => element.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const nameEmployees = employees.filter((name) => name.managers.includes(managerId));
  return nameEmployees.map((collaborators) =>
    `${collaborators.firstName} ${collaborators.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
