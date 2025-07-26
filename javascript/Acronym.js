//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (str) => {
  return str.replace(/(?:-)|(?:  )|(?:_)/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
}
