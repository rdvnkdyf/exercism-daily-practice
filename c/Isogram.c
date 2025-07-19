#include "isogram.h"
#include <string.h>
#include <ctype.h>
bool is_isogram(const char phrase[]) {
    if (!phrase) {
        return false;
    }
    bool seen[26] = { false };
    for (size_t i = 0; i < strlen(phrase); i++) {
        int alph_idx = toupper(phrase[i])-'A';
        if (alph_idx < 26 && alph_idx >= 0) {
            if (seen[alph_idx]){
                return false;
            }
            seen[alph_idx] = true;
            }
    }
    return true;
}