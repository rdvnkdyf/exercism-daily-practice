#include "grains.h"
uint64_t square(uint8_t index){
    // Validate input - squares are numbered 1-64
    if (index < 1 || index > 64) {
        return 0;  // Return 0 for invalid input instead of using printf
    }
    
    // Square n has 2^(n-1) grains
    // Use bit shifting for efficiency: 2^(n-1) = 1 << (n-1)
    return 1ULL << (index - 1);
}
uint64_t total(void){
   /*
     * Mathematical approach:
     * Sum of geometric series: 2^0 + 2^1 + 2^2 + ... + 2^63 = 2^64 - 1
     * 
     * This is more efficient than iterating through all squares
     */
    
    // 2^64 - 1 is the maximum value for uint64_t
    // This equals 18,446,744,073,709,551,615
    return UINT64_MAX;  // This equals 2^64 - 1
}