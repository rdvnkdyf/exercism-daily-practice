export class Rational {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
    // It's good practice to reduce in the constructor as well,
    // although the tests don't strictly require it for initial creation.
    // For this problem, we'll rely on explicit reduce calls in methods.
  }

  // Adds two rational numbers and reduces the result
  add(r) {
    return new Rational(
      this.numerator * r.denominator + r.numerator * this.denominator,
      this.denominator * r.denominator
    ).reduce();
  }

  // Subtracts two rational numbers and reduces the result
  sub(r) {
    return new Rational(
      this.numerator * r.denominator - r.numerator * this.denominator,
      this.denominator * r.denominator
    ).reduce();
  }

  // Multiplies two rational numbers and reduces the result
  mul(r) {
    return new Rational(
      this.numerator * r.numerator,
      this.denominator * r.denominator
    ).reduce();
  }

  // Divides two rational numbers and reduces the result
  div(r) {
    return new Rational(
      this.numerator * r.denominator,
      r.numerator * this.denominator
    ).reduce();
  }

  // Calculates the absolute value of the rational number and reduces the result
  abs() {
    // Corrected: Call .reduce() after creating the new Rational object
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator)).reduce();
  }

  // Reduces the rational number to its lowest terms
  reduce() {
    // Handle the case where the numerator is zero
    if (this.numerator === 0) {
      return new Rational(0, 1);
    }

    // Calculate the greatest common divisor (GCD) of the absolute values
    const commonDivisor = this.gcd(
      Math.abs(this.numerator),
      Math.abs(this.denominator)
    );

    // Determine the sign of the result.
    // If numerator and denominator have different signs, the result is negative.
    // Otherwise, it's positive.
    const sign = (this.numerator * this.denominator < 0) ? -1 : 1;

    // Calculate the reduced numerator and denominator
    const reducedNumerator = Math.abs(this.numerator) / commonDivisor;
    const reducedDenominator = Math.abs(this.denominator) / commonDivisor;

    // Return a new Rational with the correct sign applied to the numerator
    return new Rational(sign * reducedNumerator, reducedDenominator);
  }

  // Raises the rational number to an integer power
  exprational(power) {
    if (power === 0) {
      return new Rational(1, 1); // Any non-zero rational number to the power of 0 is 1
    }
    if (this.numerator === 0 && power < 0) {
      throw new Error("Cannot raise zero to a negative power"); // Handle division by zero
    }

    return power >= 0
      ? new Rational(
          Math.pow(this.numerator, power),
          Math.pow(this.denominator, power)
        ).reduce()
      : new Rational(
          Math.pow(this.denominator, Math.abs(power)), // Invert for negative power
          Math.pow(this.numerator, Math.abs(power))
        ).reduce();
  }

  // Raises a real number to the power of this rational number
  expreal(baseNumber) {
    const result = Math.pow(baseNumber, this.numerator / this.denominator);
    // Define a small tolerance for floating-point comparisons
    const epsilon = 1e-9; // A common value for floating-point precision

    // If the result is very close to an integer, return the integer
    if (Math.abs(result - Math.round(result)) < epsilon) {
      return Math.round(result);
    }

    // Otherwise, return the result as is
    return result;
  }

  // Helper function to calculate the greatest common divisor (GCD) using Euclidean algorithm
  gcd(a, b) {
    // Ensure a and b are non-negative for GCD calculation
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }
}