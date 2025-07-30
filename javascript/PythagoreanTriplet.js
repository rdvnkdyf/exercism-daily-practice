export function triplets(options) {
    const min = options.minFactor || 2
    const max = options.maxFactor || options.sum;
    return [...Array(max - min).keys()].map(i => i + min)
        .map(a => {
            const b = Math.floor((options.sum * (options.sum - 2 * a)) / (2 * (options.sum - a)))
            const c = options.sum - a - b
            return c <= max ? new Triplet([a, b, c]) : undefined
        })
        .filter(triplet => triplet && triplet.isPythagorean())
}
class Triplet {
    constructor(triplet) {
        this.triplet = triplet
    }
    isPythagorean() {
        const [a, b, c] = this.triplet
        return a < b && b < c && a * a + b * b === c * c
    }
    toArray() {
        return this.triplet
    }
}
