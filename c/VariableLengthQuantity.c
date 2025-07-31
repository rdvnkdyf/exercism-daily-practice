#include "variable_length_quantity.h"
#include <stdbool.h>
int encode(const uint32_t* integers, size_t integers_len, uint8_t* output) {
    size_t p = 0;
    uint8_t parts[5];
    for (size_t i = 0; i < integers_len; ++i) {
        uint32_t num = integers[i];
        short n;
        for (n = 0; n < 5; ++n) {
            parts[n] = num & 127;
            if (n > 0) parts[n] |= 128;
            num >>= 7;
            if (!num) break;
        }
        for (short i = n; i >= 0; --i)
            output[p++] = parts[i];
    }
    return p;
}
int decode(const uint8_t* bytes, size_t buffer_len, uint32_t* output) {
    size_t pi = 0, po = 0;
    while (pi < buffer_len) {
        uint32_t num = 0;
        bool stop = false;
        for (size_t i = 0; !stop && i < 5 && pi < buffer_len; ++i) {
            uint8_t byte = bytes[pi++];
            if (byte & 128)
                byte &= 127;
            else
                stop = true;
            num = (num << 7) + byte;
        }
        if (!stop) return -1;
        output[po++] = num;       
    }
    return po;
}

/*
variable_length_quantity.h
#ifndef VARIABLE_LENGTH_QUANTITY_H
#define VARIABLE_LENGTH_QUANTITY_H
#include <stdint.h>
#include <stddef.h>
int encode(const uint32_t* integers, size_t integers_len, uint8_t* output);
int decode(const uint8_t* bytes, size_t buffer_len, uint32_t* output);
#endif
*/