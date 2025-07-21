//resistor_color_duo.c
#include "resistor_color_duo.h"
uint16_t color_code(const resistor_band_t *bands) {
  return bands[0] * 10 + bands[1];
}

/*
resistor_color_duo.h
#ifndef RESISTOR_COLOR_DUO_H
#define RESISTOR_COLOR_DUO_H
#include <stdint.h>
typedef enum {
  BLACK = 0,
  BROWN,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  VIOLET,
  GREY,
  WHITE,
} resistor_band_t;
uint16_t color_code(const resistor_band_t *bands);
#endif
*/