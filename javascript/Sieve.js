function primes(limit) {
  const maybe_primes = Array.from({ length: limit + 1 }, () => true)
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (!maybe_primes[i]) continue
    let j = i * i
    while (j <= limit) {
      maybe_primes[j] = false
      j += i
    }
  }
  maybe_primes.splice(0, 2)
  return maybe_primes.reduce((primes, isPrime, i) => {
    if (isPrime) primes.push(i + 2)
    return primes
  }, [])
}
export { primes }