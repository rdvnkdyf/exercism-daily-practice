#include "scrabble_score.h"
#include <ctype.h>
typedef struct{
    int value;
    char* charlist;
} char_value_t;
unsigned int score(const char* word){
    char_value_t char_value[7] = {{1, "aeioulnrst"}, {2, "dg"}, {3, "bcmp"},
                                  {4, "fhvwy"}, {5, "k"}, {8, "jx"}, {10, "qz"}};
    unsigned int sum = 0;
    for (int i=0; word[i]!='\0'; i++) {
        for (int j=0; j<7; j++) {
            for (int k=0; char_value[j].charlist[k]!='\0'; k++) {
                if(tolower(word[i]) == char_value[j].charlist[k]){
                    sum+= char_value[j].value;
                    j=7; break;
                }
            }
        }
    }
    return sum;
}