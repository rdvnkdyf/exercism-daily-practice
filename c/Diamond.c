#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include "diamond.h"
/**
   @return an array[size] of C strings of length size.
 */
char **make_diamond(const char letter) {
    assert(letter >= 'A' && letter <= 'Z');
    // >= 2.
    const int num_letters = letter - 'A' + 1;
    // Rows: num_letters - 1, 1, num_letters - 1
    // >= 3 including the single middle row.
    const int rows = num_letters + num_letters - 1;
    // Relevant if not 0.
    const int mid_row = num_letters - 1;
    // Space for '\0'.
    const int string_length = rows + 1;
    char **const result = malloc(rows * sizeof(char *));
    // Do upper half including middle row.
    for (int row = 0; row < rows; row++) {
        const int row_offset = row <= mid_row ? row : (rows-1) - row;
        const char c = 'A' + row_offset;
        const int left = mid_row - row_offset;
        const int right = mid_row + row_offset;
        // Fill out the row.
        char *const s = malloc(string_length * sizeof(char));
        s[rows] = '\0';
        for (int i = 0; i < rows; i++) {
            s[i] = (i == left || i == right) ? c : ' ';
        }
        result[row] = s;
    }
    return result;
}
/**
   Assume the input is a correct nonempty array[size]
   of C strings of length size.
 */
void free_diamond(char **diamond) {
    const int size = strlen(diamond[0]);
    for (int i = 0; i < size; i++) {
        // Free each C string.
        free(diamond[i]);
    }
    free(diamond);
}

/*
diamond.h
#ifndef DIAMOND_H
#define DIAMOND_H

char **make_diamond(const char letter);
void free_diamond(char **diamond);

#endif

*/