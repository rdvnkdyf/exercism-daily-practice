#include "etl.h"
#include <string.h>
#include <stdlib.h>
#include <ctype.h>
int compar(const void * a, const void * b);
int convert(const legacy_map *input, const size_t input_len, new_map **output) {
    int count = 0;
    for (size_t i=0; i<input_len; i++) count += strlen(input[i].keys);
    *output = malloc(count * sizeof(new_map));
    size_t k = 0;
    for (size_t i=0; i<input_len; i++) {
        for (size_t j=0; j<strlen(input[i].keys); j++) {
            (*output)[k].key = tolower(input[i].keys[j]);
            (*output)[k++].value = input[i].value;
        }
    }
    qsort(*output, count, sizeof(new_map), compar);
    return count;
}
int compar(const void * a, const void * b) { 
    return ((new_map *)a)->key - ((new_map *)b)->key; 
}

/*
etl.h
#ifndef ETL_H
#define ETL_H

#include <stddef.h>

typedef struct {
   int value;
   const char *keys;
} legacy_map;

typedef struct {
   char key;
   int value;
} new_map;

int convert(const legacy_map *input, const size_t input_len, new_map **output);

#endif

*/