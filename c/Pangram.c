//program.c
#include "pangram.h"

bool is_pangram(const char *sentence)
{
    if (sentence == NULL)
        return (false);

    size_t length = strlen(sentence);
    if (length < 26)
        return (false);

    bool letters[26] = {false};

    for (size_t i = 0; sentence[i] != '\0'; i++)
    {
        if (sentence[i] >= 65 && sentence[i] <= 90)
            letters[sentence[i] - 65] = true;
        else if (sentence[i] >= 97 && sentence[i] <= 122)
            letters[sentence[i] - 97] = true;
    }

    for (size_t i = 0; i < 26; i++)
    {
        if (letters[i] == false)
            return (false);
    }

    return (true);
}

/*
program.h

#ifndef PANGRAM_H
#define PANGRAM_H

#include <stdbool.h>
#include <string.h>

bool is_pangram(const char *sentence);

#endif
*/