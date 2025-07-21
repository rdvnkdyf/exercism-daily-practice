//darts.c

#include "darts.h"
#include <math.h>
uint8_t score(coordinate_t position) {
    float distance = hypot(position.x, position.y);
    if (distance <= 1.0F) {
            return 10;
        }
    if (distance <= 5.0F) {
            return 5;
        }
    if (distance <= 10.0F) {
            return 1;
        }
    return 0;
}

/*
darts.h
#ifndef DARTS_H
#define DARTS_H
#include <stdint.h>
typedef struct {
    float x;
    float y;
} coordinate_t;
uint8_t score(coordinate_t landing_position);
#endif
*/