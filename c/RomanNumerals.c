#include "roman_numerals.h"
#include <stdlib.h>
#include <string.h>
#include <stdint.h>
#include <math.h>
const char* rankLookup = "IXCM";
const char* rankVLookup = "VLD";
char *to_roman_numeral(unsigned int number) {
    size_t offset = 0;
    // the longest valid roman numeral is 15 bytes long + \0
    char *answer = (char*)calloc(16, sizeof(char));
    if (number == 0 || number > 3999) return answer;
    for (int8_t rank = 3; rank >= 0; rank--) {
        uint8_t digit = floor((int)(number / pow(10, rank)) % 10);
        switch (digit)
        {
        case 4:
        case 9:
            /* 
            digits 4 and 9 are the special cases as they're represented as
            one-two-the-next-rank to make the number more readable (CD, XL, IV,
            and CM, XC, IX). The only difference is that for 4 we take the next
            V rank and for 9 just a usual decimal one.
            */
            answer[offset++] = rankLookup[rank];
            answer[offset++] = (digit == 4) ? rankVLookup[rank] : rankLookup[rank+1];
            break;
        default :
            if (digit >= 5) {
                /*
                fortunatelly for digits >= 5 (except for 9) the number of digits
                is number - 5 which is the same as for the digits > 4 (w\o the
                substraction), so we can easily calculate the offset after
                prefixing the number with the V of the current rank.
                */
                answer[offset++] = rankVLookup[rank];
                digit -= 5;
            }
            memset(answer+offset, rankLookup[rank], digit);
            offset += digit;
            break;
        }
    }
    return answer;
}

/*
roman_numerals.h
#ifndef ROMAN_NUMERALS_H
#define ROMAN_NUMERALS_H

char *to_roman_numeral(unsigned int number);

#endif
*/