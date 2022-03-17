const data = require('../data/zoo_data');

const { prices } = data;

console.log(prices);

const countEntrants = (entrants) => entrants.reduce((acc, curr) => {
  if (curr.age < 18) {
    acc.child += 1;
  }
  if (curr.age >= 18 && curr.age < 50) {
    acc.adult += 1;
  }
  if (curr.age >= 50) {
    acc.senior += 1;
  }
  return acc;
}, { child: 0, adult: 0, senior: 0 });

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const func = countEntrants(entrants);
  const child = func.child * prices.child;
  const adult = func.adult * prices.adult;
  const senior = func.senior * prices.senior;
  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
