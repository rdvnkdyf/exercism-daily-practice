#include "word_count.h"
#include <ctype.h>
#include <string.h>
int count_words(const char *input_text, word_count_word_t *words) {
    // clean words array before counts
    memset(words, 0, sizeof(word_count_word_t) * 20);
    // copy const input string into temp char array
    char str[strlen(input_text)];
    strcpy(str, input_text);
    // pointer to keep track of place in string
    char *p = str;
    int arrcount = 0;
    int len = (int)strlen(str);
    for (int i = 0; i <= len; i++) {
        str[i] = tolower(str[i]);
        // regex not ANSI so manually walking through the string
        if (!isalnum(str[i]) && str[i] != '\'') {
            str[i] = '\0';
            if (strlen(p) > MAX_WORD_LENGTH)
                return EXCESSIVE_LENGTH_WORD;
            // strip single quotes if it is in 1st and last position
            if (p[0] == '\'' && p[strlen(p) - 1] == '\'') {
                p[strlen(p) - 1] = '\0';
                p += 1;
            }
            // skip if successive non-alphanum characters are found
            if (strlen(p) == 0) {
                p = str + i + 1;
                continue;
            }
            // scan words array if words already exists
            int j = 0;
            for (; j < arrcount; j++) {
                if (!strcmp(words[j].text, p)) {
                    words[j].count++;
                    break;
                }
            }
            // if word not found create new entry in words aray
            if (j == arrcount) {
                if (arrcount == 20)
                    return EXCESSIVE_NUMBER_OF_WORDS;
                strcpy(words[arrcount].text, p);
                words[arrcount].count = 1;
                arrcount++;
            }
            p = str + i + 1;
        }
    }
    return arrcount;
}


/*
word_count.h
#ifndef WORD_COUNT_H
#define WORD_COUNT_H
#define MAX_WORDS                                                              \
   20   // at most MAX_WORDS can be found in the test input string
#define MAX_WORD_LENGTH 50   // no individual word can exceed this length
// results structure
typedef struct word_count_word {
   char text[MAX_WORD_LENGTH +
             1];   // allow for the string to be null-terminated
   int count;
} word_count_word_t;
#define EXCESSIVE_LENGTH_WORD -1
#define EXCESSIVE_NUMBER_OF_WORDS -2
// count_words - routine to classify the unique words and their frequency in a
// sentence inputs:
//    sentence =  a null-terminated string containing that is analyzed
//
// outputs:
//    words = allocated structure to record the words found and their frequency
//    uniqueWords - number of words in the words structure
//           returns a negative number if an error.
//           words will contain the results up to that point.
int count_words(const char *sentence, word_count_word_t *words);
#endif


*/