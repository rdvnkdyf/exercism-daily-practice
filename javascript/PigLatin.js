export function translate(phrase) {
    return phrase.split(' ')
        .map(toPigLatin)
        .join(' ')
}
function toPigLatin(word) {
    const n = /^[aeiou]|^yt|^xr/.test(word) ? 0 :
        /^.qu|^thr|^sch/.test(word) ? 3 :
        /^ch|^qu|^th|^..y/.test(word) ? 2 : 1
    return word.slice(n) + word.slice(0, n) + 'ay'
}