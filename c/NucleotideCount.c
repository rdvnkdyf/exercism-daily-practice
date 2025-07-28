#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "nucleotide_count.h"
char *count(const char *dna_strand) {
    int a = 0, c = 0, g = 0, t = 0;
    char *count = malloc(30);
    size_t len = strlen(dna_strand);
    for (size_t i = 0; i < len; i++) {
        switch (dna_strand[i]) {
            case 'A':
                a++;
                break;
            case 'C':
                c++;
                break;
            case 'G':
                g++;
                break;
            case 'T':
                t++;
                break;
            default:
                strcpy(count, "");
                return count;
        }
    }
    sprintf(count, "A:%d C:%d G:%d T:%d", a, c, g, t);
    return count;
}