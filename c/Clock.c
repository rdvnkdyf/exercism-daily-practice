/*
clock.c
#include "clock.h"
#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#define HOUR_MAX 24
#define MINUTE_MAX 60
static int wraparound(int time, int max)
{
    return ((time % max) + max) % max;
}
static int int_floor(int num, int denom)
{
    if (num < 0)
        return ((num + 1) / denom) - 1;
    else
        return num / denom;
}
static void wraparound_time(int *hour, int *minute)
{
    if (!hour || !minute)
        return;
    *hour   = wraparound(*hour + int_floor(*minute, MINUTE_MAX), HOUR_MAX);
    *minute = wraparound(*minute, MINUTE_MAX);
}
clock_t clock_create(int hour, int minute)
{
    clock_t clock;
    // Properly wrap the minute and hour values.
    wraparound_time(&hour, &minute);
    sprintf(clock.text, "%2.2d:%2.2d", hour, minute);
    return clock;
}
clock_t clock_add(clock_t clock, int minute_add)
{
    int hour, minute;
    sscanf(clock.text, "%2d:%2d", &hour, &minute);
    return clock_create(hour, minute + minute_add);
}
clock_t clock_subtract(clock_t clock, int minute_subtract)
{
    return clock_add(clock, -minute_subtract);
}
bool clock_is_equal(clock_t a, clock_t b)
{
    return strcmp(a.text, b.text) == 0;
}

*/

/*
clock.h
#ifndef CLOCK_H
#define CLOCK_H

#include <stdbool.h>

#define MAX_STR_LEN sizeof("##:##")

typedef struct {
   char text[MAX_STR_LEN];
} clock_t;

clock_t clock_create(int hour, int minute);
clock_t clock_add(clock_t clock, int minute_add);
clock_t clock_subtract(clock_t clock, int minute_subtract);
bool clock_is_equal(clock_t a, clock_t b);

#endif
*/