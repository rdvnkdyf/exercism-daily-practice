#include "run_length_encoding.h"
#include <math.h>
#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char *encode(const char *text)
{
    char encoded[0xffff];
    char current;
    size_t current_encoded = 0;
    size_t count;
    size_t chunk_len;
    char* ret;
    for (const char* c = text; *c;) {
        current = *c;
        for (count = 0; c[count] == current; count++);
        if (count == 1) {
            sprintf(&encoded[current_encoded++], "%c", current);
        } else {
            chunk_len = log10(count) + 2;
            sprintf(&encoded[current_encoded], "%zu%c", count, current);
            current_encoded += chunk_len;
        }
        c += count;
    }
    ret = malloc(sizeof(char) * current_encoded + 1);
    strcpy(ret, encoded);
    return ret;
}
char *decode(const char *data)
{
    char decoded[0xffff];
    size_t current_decoded = 0;
    size_t count;
    size_t count_len;
    char* ret;
    for (const char* c = data; *c;) {
        count = atoi(c);
        if (count == 0 || *c == ' ') {
            decoded[current_decoded++] = *c;
            c++;
        } else {
            count_len = log10(count) + 1;
            memset(&decoded[current_decoded], *(c + count_len), count);
            current_decoded += (count);
            c += count_len + 1;
        }
    }
    ret = calloc(current_decoded + 1, sizeof(char));
    strncpy(ret, decoded, current_decoded);
    return ret;
}


/*
run_length_encoding.h
#ifndef RUN_LENGTH_ENCODING_H
#define RUN_LENGTH_ENCODING_H

char *encode(const char *text);
char *decode(const char *data);

#endif
*/