//Resistor color
#include "resistor_color.h"
resistor_band_t resistorBandColors[] = {BLACK, BROWN, RED, ORANGE, YELLOW, GREEN, BLUE, VIOLET, GREY, WHITE};
int color_code(resistor_band_t resistorColor)
{
    return resistorColor;
}
resistor_band_t *colors(void)
{
    return resistorBandColors;
}

/*
resistor_color.h
#ifndef RESISTOR_COLOR_H
#define RESISTOR_COLOR_H
typedef enum Colors {
    BLACK = 0,
    BROWN = 1,
    RED = 2,
    ORANGE = 3,
    YELLOW = 4,
    GREEN = 5,
    BLUE = 6,
    VIOLET = 7,
    GREY = 8,
    WHITE = 9
} resistor_band_t;
int color_code(resistor_band_t resistorColor);
resistor_band_t *colors(void);
#endif
*/