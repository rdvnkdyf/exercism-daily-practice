//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let primes = [];
  for (let i = 2; i <= num; ) {
    num % i === 0 ? primes.push(i) && (num /= i) : i++;
  }
  return primes;
};