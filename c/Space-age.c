//space_age.c
#include "space_age.h"
float orbital[8]={0.2408467,0.61519726,1.0,1.8808158,11.862615,29.447498,84.016846,164.79132};
float age(planet_t planet, int64_t seconds)
{  
    if ((planet>=0) && (planet<8))
    {
        float earth_year = seconds / 31557600;
        return earth_year/orbital[planet];
    }
    else{return -1;}
   
}
/*
#ifndef SPACE_AGE_H
#define SPACE_AGE_H

#include <stdint.h>

typedef enum planet {
   MERCURY,
   VENUS,
   EARTH,
   MARS,
   JUPITER,
   SATURN,
   URANUS,
   NEPTUNE,
} planet_t;

float age(planet_t planet, int64_t seconds);

#endif

*/