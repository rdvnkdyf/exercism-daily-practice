#include "pig_latin.h"
#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>
#define MAX_WORDS (10)
#define MAX_WORDS_LENGTH (100)
typedef struct {
    char words[MAX_WORDS][MAX_WORDS_LENGTH];
} words_t;
static words_t* split(const char* phrase) {
    words_t* result = calloc(1, sizeof(words_t));
    size_t word_count = 0; 
    char tmp[MAX_WORDS * MAX_WORDS_LENGTH];
    strcpy(tmp, phrase);
    char* word = strtok(tmp, " ");
    do {
        if(word) {
            strcpy(result->words[word_count], word);
            word_count++;
        }
        word = strtok(NULL, " ");
    } while(word != NULL);
    return result;
}
static char* translate_word_vowel(char* word) {
    char tmp[MAX_WORDS_LENGTH] = {'\0'};
    
    strcpy(tmp, word);
    strcat(tmp, "ay");
    strcpy(word, tmp);
    return word;
}
static bool start_with_vowel(char* word) {
    return word[0] == 'a' 
        || word[0] == 'e' 
        || word[0] == 'i' 
        || word[0] == 'o' 
        || word[0] == 'u' 
        || (word[0] == 'y' && word[1] == 't')
        || (word[0] == 'x' && word[1] == 'r');
}
static bool start_with_qu(char* word) {
    return word[0] == 'q' && word[1] == 'u';
}
static bool start_with_Xqu(char* word) {
    return word[1] == 'q' && word[2] == 'u';
}
static bool start_with_sch(char* word) {
    return word[0] == 's' && word[1] == 'c' && word[2] == 'h';
}
static bool start_with_thr(char* word) {
    return word[0] == 't' && word[1] == 'h' && word[2] == 'r';
}
static bool y_second_letter_of_two_letter_word(char* word) {
    return word[1] == 'y' && word[2] == '\0';
}
static char* translate_word_consonant(char* word) {
    char tmp[MAX_WORDS_LENGTH] = {'\0'};
    if(start_with_qu(word)) {
        strcpy(tmp, word + 2);
        word[2] = '\0';
    } else if(start_with_Xqu(word) || start_with_thr(word) || start_with_sch(word)) {
        strcpy(tmp, word + 3);
        word[3] = '\0';
    } else if(start_with_vowel(word + 1) || y_second_letter_of_two_letter_word(word)) {
        strcpy(tmp, word + 1);
        word[1] = '\0';
    } else {
        strcpy(tmp, word + 2);
        word[2] = '\0';
    }
    strcat(tmp, word);
    strcat(tmp, "ay");
    strcpy(word, tmp);
    return word;
}
static char* translate_word(char* word) {
    if(start_with_vowel(word)) {
        printf("vowel\n");
        return translate_word_vowel(word);
    }
    return translate_word_consonant(word);
}
char* translate(const char* phrase) {
    if(NULL == phrase) {
        return NULL;
    }
    char* result = calloc(MAX_WORDS * MAX_WORDS_LENGTH, sizeof(char));
    words_t* words = split(phrase);
    for(size_t i = 0; i < MAX_WORDS; ++i) {
        printf("%s\n", result);
        strcat(result, translate_word(words->words[i]));
        if(i + 1 == MAX_WORDS || strlen(words->words[i + 1]) == 0) {
            break;
        }
        strcat(result, " ");
    }
    return result;
}

/*
pig_latin.h
#ifndef PIG_LATIN_H
#define PIG_LATIN_H

char *translate(const char *phrase);

#endif

*/