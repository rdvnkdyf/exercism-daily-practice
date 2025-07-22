//elliuds_eggs.c
#include "eliuds_eggs.h"
int egg_count(int bits) {
  return __builtin_popcount(bits);
}


//elliuds_eggs.h
/*
#ifndef ELIUDS_EGGS_H
#define ELIUDS_EGGS_H
int egg_count(int bits);
#endif

*/