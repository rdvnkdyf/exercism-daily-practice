//queen_attack.c
#include "queen_attack.h"
attack_status_t can_attack(position_t queen_1, position_t queen_2) {
  if (queen_1.column > 7) return INVALID_POSITION;
  if (queen_1.row > 7) return INVALID_POSITION;
  if (queen_2.column > 7) return INVALID_POSITION;
  if (queen_2.row > 7) return INVALID_POSITION;
  if (queen_1.column == queen_2.column && queen_1.row == queen_2.row) {
    return INVALID_POSITION;
  }
  if (queen_1.column == queen_2.column || queen_1.row == queen_2.row) {
    return CAN_ATTACK;
  }
  if (abs(queen_1.column - queen_2.column) == abs(queen_1.row - queen_2.row)) {
    return CAN_ATTACK;
  }
  return CAN_NOT_ATTACK;
}

/*
#ifndef QUEEN_ATTACK_H
#define QUEEN_ATTACK_H
#include <stdint.h>
#include <stdlib.h>
typedef enum { CAN_NOT_ATTACK, CAN_ATTACK, INVALID_POSITION } attack_status_t;
typedef struct {
  uint8_t row;
  uint8_t column;
} position_t;
attack_status_t can_attack(position_t queen_1, position_t queen_2);
#endif

*/