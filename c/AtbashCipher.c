#include "atbash_cipher.h"
#include <ctype.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
static size_t inner(bool add_spaces, const char *input, char *result);
char *atbash_encode(const char *input) {
  size_t len = inner(true, input, NULL);
  char *result = malloc((len + 1) * sizeof(char));
  result[len] = 0;
  inner(true, input, result);
  return result;
}
char *atbash_decode(const char *input) {
  size_t len = inner(false, input, NULL);
  char *result = malloc((len + 1) * sizeof(char));
  result[len] = 0;
  inner(false, input, result);
  return result;
}
size_t inner(bool add_spaces, const char *input, char *result) {
  size_t len = 0;
  size_t consumed = 0;
  while (*input) {
    if (isalpha(*input) || isdigit(*input)) {
      if (add_spaces && consumed && consumed % 5 == 0) {
        if (result) {
          result[len] = ' ';
        }
        len++;
      }
      if (result) {
        if (isalpha(*input)) {
          result[len] = ('z' - tolower(*input) + 'a');
        } else {
          result[len] = *input;
        }
      }
      consumed++;
      len++;
    }
    input++;
  }
  return len;
}

/*
atbash_cipher.h
#ifndef ATBASH_CIPHER_H
#define ATBASH_CIPHER_H

char *atbash_encode(const char *input);
char *atbash_decode(const char *input);

#endif
*/