//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
	constructor(series) {
		if (series === "") throw new Error("series cannot be empty");
		this.series = series;
	}
	get digits() {
		return [...this.series].map(Number);
	}
	slices(sliceLength) {
		if (sliceLength < 0) throw new Error("slice length cannot be negative");
		if (sliceLength === 0) throw new Error("slice length cannot be zero");
		if (sliceLength > this.digits.length) throw new Error("slice length cannot be greater than series length");
		return this.digits
			.map((digit, index, digits) => digits.slice(index, index + sliceLength))
			.filter((s) => s.length === sliceLength);
	}
}
