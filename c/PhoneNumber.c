#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <stdbool.h>
#include "phone_number.h"
enum {
  max_length = 11,
  area_code_offset = 0,
  exchange_code_offset = 3
};
static bool clean(char* cleaned, const char* input)
{
  size_t input_length = strlen(input);
  size_t count = 0;
  for(size_t i = 0; i < input_length; i++) {
    if(isdigit(input[i])) {
      cleaned[count++] = input[i];
    }
    else if(isalpha(input[i])) {
      return false;
    }
  }
  if(count < 10 || count > 11) {
    return false;
  }
  if(count == 11) {
    if(cleaned[area_code_offset] == '1') {
      memmove(cleaned, &cleaned[area_code_offset + 1], max_length);
    }
    else {
      return false;
    }
  }
  if(cleaned[area_code_offset] < '2' || cleaned[exchange_code_offset] < '2') {
    return false;
  }
  return true;
}
char* phone_number_clean(const char* input)
{
  char* cleaned = calloc(max_length + 1, sizeof(char));
  if(!clean(cleaned, input)) {
    strcpy(cleaned, "0000000000");
  }
  return cleaned;
}

/*
phone_number.h
#ifndef PHONE_NUMBER_H
#define PHONE_NUMBER_H

char *phone_number_clean(const char *input);

#endif

*/