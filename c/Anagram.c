#include <string.h>
#include <ctype.h>
#include <stdlib.h>
#include <stdio.h>
#include "anagram.h"
/** Return string length, not including NUL. */
static inline int strcpy_toupper(char *dest, const char *src) {
    int length = 0;
    for (;;) {
        char const c = *src;
        *dest = toupper(*src);
        if (c == '\0') {
            break;
        }
        length++;
        src++;
        dest++;
    }
    return length;
}
static int compare_char(const void *p1, const void *p2) {
    char const c1 = *(const char *)p1;
    char const c2 = *(const char *)p2;
    return c1 - c2;
}
/**
 * @description - determines if any of the words in candidate are anagrams
 *                for subject. Contents of candidate structures may be modified.
 */
void find_anagrams(const char *subject, struct candidates *candidates) {
    char upper_subject[MAX_STR_LEN];
    int const subject_length = strcpy_toupper(upper_subject, subject);
    // Copy and sort.
    char sorted_upper_subject[MAX_STR_LEN];
    strcpy(sorted_upper_subject, upper_subject);
    qsort(sorted_upper_subject, subject_length, sizeof(char), compare_char);
    int const candidates_length = candidates->count;
    struct candidate * const candidate = candidates->candidate;
    for (int i = 0; i < candidates_length; i++) {
        struct candidate *const c = &candidate[i];
        char upper_word[MAX_STR_LEN];
        int const word_length = strcpy_toupper(upper_word, c->word);
        if (strcmp(upper_word, upper_subject) == 0) {
            c->is_anagram = NOT_ANAGRAM;
        } else {
            // Sort upper_word in place.
            qsort(upper_word, word_length, sizeof(char), compare_char);
            if (strcmp(upper_word, sorted_upper_subject) == 0) {
                c->is_anagram = IS_ANAGRAM;
            } else {
                c->is_anagram = NOT_ANAGRAM;
            }
        }
    }
}

/*
anagram.h
#ifndef ANAGRAM_H
#define ANAGRAM_H
#include <stddef.h>
#define MAX_STR_LEN 20
enum anagram_status { UNCHECKED = -1, NOT_ANAGRAM, IS_ANAGRAM };
struct candidate {
   enum anagram_status is_anagram;
   const char *word;
};
struct candidates {
   struct candidate *candidate;
   size_t count;
};
/**
 * @description - determines if any of the words in candidate are anagrams
 *                for subject. Contents of candidate structures may be modified.
 */
/*void find_anagrams(const char *subject, struct candidates *candidates);
#endif
*/
