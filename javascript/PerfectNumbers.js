function findFactorsSum(num){
  const halfNum = Math.floor(num / 2)
  const factors = []
  for (let i = halfNum; i > 0; i--){
    if (num % i === 0) {
      factors.push(i)
    }
  }
  if (factors.length === 0) {return 0}
  return factors.reduce((acc, curr) => acc + curr)
}


export const classify = (num) => {
  if (num <= 0) {throw Error("Classification is only possible for natural numbers.")}
  const factorSum = findFactorsSum(num)
  if (factorSum  === num) { return 'perfect'}
  if (factorSum  > num) { return 'abundant'}
  return 'deficient'
};