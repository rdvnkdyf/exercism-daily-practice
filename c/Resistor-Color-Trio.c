//Resistor-Color-Trio.c
#include <math.h>
#include "resistor_color_trio.h"

resistor_value_t color_code(resistor_band_t *resistor_color) {
    resistor_value_t resistor;
    resistor.value = resistor_color[0];
    resistor.value = resistor_color[1] + (resistor.value * 10);
    if (resistor_color[2] >= 0 && resistor_color[2] < 3 ) {
        resistor.value *= pow(10, resistor_color[2]);
        if(resistor.value<1000)
            resistor.unit = OHMS;
        else {
            resistor.value /= 1000;
            resistor.unit = KILOOHMS;
        }
    } 
    else if (resistor_color[2] >= 3 && resistor_color[2] < 6) {
        resistor.unit = KILOOHMS;
        resistor.value *= pow(10, resistor_color[2] - 3);
    } 
    else if (resistor_color[2] >= 6 && resistor_color[2] < 9) {
        resistor.unit = MEGAOHMS;
        resistor.value *= pow(10, resistor_color[2] - 6);
    } 
    else {
        resistor.unit = GIGAOHMS;
        resistor.value *= pow(10, resistor_color[2] - 9);
    }

    return resistor;
}

/*
resistor_color_trio.h
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
    WHITE
} resistor_band_t;

typedef enum {
    OHMS = 0,
    KILOOHMS = 3,
    MEGAOHMS = 6,
    GIGAOHMS = 9
} ohms_unit;

typedef struct resistor_value_t {
    uint16_t value;
    ohms_unit unit;
} resistor_value_t;

resistor_value_t color_code(resistor_band_t *);
#endif
*/