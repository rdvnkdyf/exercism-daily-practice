const Null = {
    values: [],
    append: other => other,
    concat: others => others,
    filter: _ => Null,
    length: () => 0,
    map: _ => Null,
    foldl: (_, init) => init,
    foldr: (_, init) => init,
    push: val => new Cons(val, Null),
    reverse: () => Null 
}

class Cons {
    static fromArray(array) {
        const [head, ...rest] = array
        return head ? new Cons(head, Cons.fromArray(rest)) : Null
    }
    constructor(val, rest) {
        this.val = val
        this.rest = rest
    }
    get values() {
        return [this.val, ...this.rest.values]
    }
    append(other) {
        return new Cons(this.val, this.rest.append(other))
    }
    concat(others) {
        return others.foldl((acc, val) => acc.append(val), this)
    }
    filter(pred) {
        let filteredRest = this.rest.filter(pred)
        return pred(this.val) ? new Cons(this.val, filteredRest) : filteredRest
    }
    length() {
        return 1 + this.rest.length()
    }
    map(fn) {
        return new Cons(fn(this.val), this.rest.map(fn))
    }
    foldl(fn, init) {
        return this.rest.foldl(fn, fn(init, this.val))
    }
    foldr(fn, init) {
        return fn(this.rest.foldr(fn, init), this.val)
    }
    push(val) {
        return new Cons(this.val, this.rest.push(val))
    }
    reverse() {
        return this.rest.reverse().push(this.val)
    }
}

export class List {
    constructor(values = []) {
        return Cons.fromArray(values)
    }
}
