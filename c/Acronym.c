#include "acronym.h"
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char *abbreviate(const char *phrase)
{
    const char* p = phrase;
    if (p == NULL || *p == 0)
        return NULL;
    int start = 1;
    char* result = malloc(strlen(phrase));
    char* r = result;
    while (*p != 0) {
        if (!isalnum(*p) && *p != '\'') {
            start = 1;
        }
        else if (start) {
            *r++ = toupper(*p);
            start = 0;
        }
        p++;
    }
    *r = 0;
    return result;
}

/*
acronym.h
#ifndef ACRONYM_H
#define ACRONYM_H

char *abbreviate(const char *phrase);

#endif

*/