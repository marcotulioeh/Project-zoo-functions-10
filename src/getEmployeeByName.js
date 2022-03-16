const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  // eslint-disable-next-line max-len
  return employees.find((element) => employeeName === element.firstName || employeeName === element.lastName);
};

module.exports = getEmployeeByName;
