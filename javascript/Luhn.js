//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function valid(number) {
    if (/[^0-9 ]/.test(number) || number.trim().length <= 1) {
        return false
    }
    const sum = [...number.replaceAll(' ', '')]
        .reverse()
        .map((c, i) => i % 2 ? (c < 5 ? c * 2 : c * 2 - 9) : c)
        .reduce((sum, c) => sum + Number(c), 0)
    return sum % 10 === 0
}
