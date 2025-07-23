//robot_simulator.c
#include "robot_simulator.h"

robot_status_t robot_create(robot_direction_t direction, int x, int y) {
    robot_status_t stat = {
        .direction = direction,
        .position = (robot_position_t) { .x = x, .y = y }
    };
    return stat;
}

void robot_move(robot_status_t * robot, const char *commands) {
    static int incx[] = { 0, 1, 0, -1};
    static int incy[] = { 1, 0, -1, 0};
    for (char *cc=(char *) commands; *cc != '\0'; cc++ ) {
        switch (*cc) {
            case 'R' :
                robot->direction = (robot->direction+1) % 4;
                break;
            case 'L' :
                robot->direction = (robot->direction+3) % 4;
                break;
            case 'A' :
                robot->position = (robot_position_t) {
                    .x = robot->position.x +  incx[robot->direction],
                    .y = robot->position.y +  incy[robot->direction]
                };
                break;
            default: 
                break;
        };
    }
}
/*
robot_simulator.h
#ifndef ROBOT_SIMULATOR_H
#define ROBOT_SIMULATOR_H

typedef enum {
   DIRECTION_NORTH = 0,
   DIRECTION_DEFAULT = DIRECTION_NORTH,
   DIRECTION_EAST,
   DIRECTION_SOUTH,
   DIRECTION_WEST,
   DIRECTION_MAX
} robot_direction_t;

typedef struct {
   int x;
   int y;
} robot_position_t;

typedef struct {
   robot_direction_t direction;
   robot_position_t position;
} robot_status_t;

robot_status_t robot_create(robot_direction_t direction, int x, int y);
void robot_move(robot_status_t *robot, const char *commands);

#endif
*/