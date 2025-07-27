//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, count = 0) => {
  if (n < 1) throw new Error('Only positive integers are allowed');
  return n == 1 ? count : steps(n % 2 == 0 ? n / 2 : 3 * n + 1, ++count)
};
