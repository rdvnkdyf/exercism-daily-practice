export function score(str) {
    let val = str
        .replace(/[AEIOULNRST]/gi, '+1')
        .replace(/[DG]/gi, '+2')
        .replace(/[BCMP]/gi, '+3')
        .replace(/[FHVWY]/gi, '+4')
        .replace(/[K]/gi, '+5')
        .replace(/[JX]/gi, '+8')
        .replace(/[QZ]/gi, '+10')
    return eval(val + '+0');
}