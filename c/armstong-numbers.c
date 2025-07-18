#include "armstrong_numbers.h"
#include "math.h"
bool is_armstrong_number(int candidate){
  if (candidate < 0) {
        return false; // Armstrong numbers are typically defined for non-negative integers
    }
    if (candidate < 10) {
        return true; // Single-digit numbers are Armstrong numbers
    }

    int numDigits = 0;
    int tempNum = candidate; // Use tempNum to count digits and then to calculate the sum of powers

    // Calculate the number of digits
    while (tempNum != 0) {
        tempNum /= 10;
        numDigits++;
    }

    long long result = 0; // Use long long to prevent overflow for larger numbers

    tempNum = candidate; // Reset tempNum to the original candidate for the second loop

    // Calculate the sum of digits raised to the power of numDigits
    while (tempNum != 0) {
        int remainder = tempNum % 10;
        result += pow(remainder, numDigits);
        tempNum /= 10;
    }

    return (result == candidate);

}