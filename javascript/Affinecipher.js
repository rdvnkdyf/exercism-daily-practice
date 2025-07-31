const m = 26;
export const encode = (phrase, { a, b }) => {
    validateCoPrime(a, m)
    return phrase.toLowerCase().split('')
        .filter(c => c.match(/[0-9a-z]/))
        .map(c => c.match(/[a-z]/) ? String.fromCharCode((a * (c.charCodeAt(0) - 'a'.charCodeAt(0)) + b) % m + 'a'.charCodeAt(0)) : c)
        .join('')
        .split(/(.{5})/)
        .filter(s => s)
        .join(' ')
}
function validateCoPrime(a, b) {
    if ([...Array(Math.min(a, b) - 1).keys()]
        .map(n => n + 2)
        .some(n => a % n === 0 && b % n === 0)
    ) {
        throw Error('a and m must be coprime.')
    }
}
export const decode = (phrase, { a, b }) => {
    validateCoPrime(a, m)
    return phrase.split('')
        .filter(c => c.match(/[0-9a-z]/))
        .map(c => c.match(/[a-z]/) ?
            String.fromCharCode(((mmi(a, m) * (c.charCodeAt(0) - 'a'.charCodeAt(0) - b)) % m + m) % m + 'a'.charCodeAt(0)) :
            c
        )
        .join('')
}
function mmi(a, m) {
    return [...Array(m - 1).keys()]
        .map(n => n + 1)
        .find(n => n * a % m === 1)
}