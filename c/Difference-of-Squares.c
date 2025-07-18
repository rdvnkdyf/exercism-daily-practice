#include "difference_of_squares.h"

unsigned int sum_of_squares(unsigned int number){
    // Sum of squares: n(n+1)(2n+1)/6
    return (number * (number + 1) * (2 * number + 1)) / 6;
}
unsigned int square_of_sum(unsigned int number){
    unsigned int sum = (number * (number + 1)) / 2;
    // Return square of the sum
    return sum * sum;
}
unsigned int difference_of_squares(unsigned int number){
    return (number * (number + 1) * (number - 1) * (3 * number + 2)) / 12;
}