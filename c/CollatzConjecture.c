#include "collatz_conjecture.h"
int steps(int start) {
    // Collatz Conjecture is defined for positive integers.
    // If the input is 0 or negative, it's invalid.
    if (start <= 0) {
        return -1;
    }

    // If the starting number is already 1, it takes 0 steps to reach 1.
    if (start == 1) {
        return 0;
    }

    int count = 0; // Initialize step counter
    unsigned long long current_number = start; // Use unsigned long long to prevent potential overflow

    // Loop until the number reaches 1
    while (current_number != 1) {
        if (current_number % 2 == 0) {
            // If even, divide by 2
            current_number /= 2;
        } else {
            // If odd, multiply by 3 and add 1
            // This operation can cause the number to grow very large.
            // Using unsigned long long helps mitigate overflow for many cases,
            // but the Collatz conjecture can theoretically produce numbers
            // that exceed even unsigned long long limits.
            current_number = current_number * 3 + 1;
        }
        count++; // Increment step count for each operation
    }
    return count;
}