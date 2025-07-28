export function countNucleotides(DNA) {
    if(!/^[ACGT]*$/.test(DNA)) {
        throw new Error('Invalid nucleotide in strand')
    }
    const counts = {A: 0, C: 0, G: 0, T: 0}
    for(const symbol of Object.keys(counts)) {
        const regex = new RegExp(symbol, 'g')
        counts[symbol] = (DNA.match(regex) || []).length
    }
    return Object.values(counts).join(' ')
}
