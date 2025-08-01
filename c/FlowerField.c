#include "flower_field.h"
#include <string.h>
#include <stdlib.h>
char **annotate(const char **garden, const size_t rows) {
    if (rows == 0) return NULL;
    size_t cols = strlen(garden[0]);
    char **result = malloc((rows + 1) * sizeof(char *));
    result[rows] = NULL;
    
    for (size_t i = 0; i < rows; i++) {
        result[i] = malloc(cols + 1);
        memset(result[i], ' ', cols);
        result[i][cols] = '\0';
    }
    for (size_t i = 0; i < rows; i++) {
        for (size_t j = 0; j < cols; j++) {
            if (garden[i][j] == '*') {
                result[i][j] = '*';
                
                for (int di = -1; di <= 1; di++) {
                    for (int dj = -1; dj <= 1; dj++) {
                        if (di == 0 && dj == 0) continue;
                        size_t ni = i + di, nj = j + dj;
                        if (ni < rows && nj < cols && result[ni][nj] != '*') {
                            if (result[ni][nj] == ' ') result[ni][nj] = '1';
                            else result[ni][nj]++;
                        }
                    }
                }
            }
        }
    }
    return result;
}
void free_annotation(char **annotation) {
    for (size_t i = 0; annotation[i] != NULL; i++) {
        free(annotation[i]);
    }
    free(annotation);
}

/*
flower_field.h
#ifndef FLOWER_FIELD_H
#define FLOWER_FIELD_H
#include <stddef.h>

char **annotate(const char **garden, const size_t rows);
void free_annotation(char **annotation);

#endif

*/