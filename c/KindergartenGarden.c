#include "kindergarten_garden.h"
plants_t plants(const char *diagram, const char *student)
{
    const char *it = diagram;
    while (*(it++) != '\n');
    plants_t p;
    int index = (*student - 'A');
    p.plants[0] = diagram[2 * index];
    p.plants[1] = diagram[2 * index + 1];
    p.plants[2] = it[2 * index];
    p.plants[3] = it[2 * index + 1];
    return p;
}

/*
kindergarten_garden.h
#ifndef KINDERGARTEN_GARDEN_H
#define KINDERGARTEN_GARDEN_H
typedef enum { CLOVER = 'C', GRASS = 'G', RADISHES = 'R', VIOLETS = 'V' } plant_t;
typedef struct {
   plant_t plants[4];
} plants_t;
plants_t plants(const char *diagram, const char *student);
#endif

*/