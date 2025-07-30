export const score = (dice, category) => {

  const sides = [1,2,3,4,5,6];
  const count = n => dice.filter(side => side === n).length
  const counts = sides.map(count);
  const sum = dice.reduce((sum, die) => sum += die, 0);
  const product = dice.reduce((product, die) => product *= die, 1);
  const sdice = dice.sort();

  const rules = {
    'ones'            : () => counts[0],
    'twos'            : () => counts[1] * 2,
    'threes'          : () => counts[2] * 3,
    'fours'           : () => counts[3] * 4,
    'fives'           : () => counts[4] * 5,
    'sixes'           : () => counts[5] * 6,
    'full house'      : () => [2,3].every(n => counts.includes(n)) ? sum : 0,
    'four of a kind'  : () => ((counts.indexOf(4)+1) || (counts.indexOf(5)+1)) * 4,
    'little straight' : () => product === 120 ? 30 : 0,
    'big straight'    : () => product === 720 ? 30 : 0,
    'choice'          : () => sum,
    'yacht'           : () => sdice[0] === sdice[4] ? 50 : 0
  };

  return rules[category]();
};