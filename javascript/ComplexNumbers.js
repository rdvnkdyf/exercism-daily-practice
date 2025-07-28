export class ComplexNumber {
    constructor(real, imag) {
        this.real = real
        this.imag = imag
    }
    add(cn) {
        this.real += cn.real
        this.imag += cn.imag
        return this
    }
    sub(cn) {
        this.real -= cn.real
        this.imag -= cn.imag
        return this
    }
    mul(cn) {
        const real = this.real * cn.real - (this.imag * cn.imag)
        this.imag = this.imag * cn.real + this.real * cn.imag
        this.real = real
        return this
    }
    div(cn) {
        const sumSq = cn.real * cn.real + cn.imag * cn.imag,
            real = (this.real * cn.real + this.imag * cn.imag) / sumSq
        this.imag = (this.imag * cn.real - this.real * cn.imag) / sumSq
        this.real = real
        return this
    }
    get abs() {
        return Math.sqrt(this.real * this.real + this.imag * this.imag)
    }
    get conj() {
        return new ComplexNumber(this.real, this.imag ? -this.imag : 0)
    }
    get exp() {
        const expA = Math.exp(this.real)
        return new ComplexNumber(expA * Math.cos(this.imag), expA * Math.sin(this.imag))
    }
}