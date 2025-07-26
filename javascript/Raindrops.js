//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (x) => {
  let str='';

  if (x % 3 === 0) str += 'Pling';
  if (x % 5 === 0) str += 'Plang';
  if (x % 7 === 0) str += 'Plong';

  return str || x.toString();
};
