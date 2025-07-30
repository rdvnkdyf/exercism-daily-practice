export class CustomSet extends Set {
	contains = this.has;
	empty = () => !this.size;
	eql = s => this.size == s.size && this.subset(s);
	union = s => new CustomSet([...this, ...s]);
	filter = f => new CustomSet([...this].filter(f));
	intersection = s => this.filter(x => s.has(x));
	difference = s => this.filter(x => !s.has(x));
	subset = s => this.difference(s).empty();
	disjoint = s => this.intersection(s).empty();
}
