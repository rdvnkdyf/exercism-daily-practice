const codons = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA', 'UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA', 'UAG', 'UGA']
}

function find(codon) {
    for(const name in codons) {
        if(codons[name].includes(codon)) {
            return name
        }
    }
    return false
}

export function translate(RNA) {
    if(!RNA) return []

    const names = RNA.match(/.{1,3}/g).map(find),
        stop = names.findIndex(n => n === 'STOP'),
        final = stop === -1 ? names : names.slice(0, stop)

    if (final.some(n => !n)) {
        throw new Error('Invalid codon')
    }

    return final
}