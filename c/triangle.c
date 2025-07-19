#include "triangle.h"
#include <math.h>
bool is_triangle(triangle_t t);
bool is_triangle(triangle_t t) {
   return t.c <= t.a + t.b &&
          t.a <= t.b + t.c &&
          t.b <= t.c + t.a &&
          t.a > 0 && t.b > 0 && t.c > 0;
}
bool is_equilateral(triangle_t t) {
   return is_triangle(t) && t.a == t.b && t.b == t.c;
}
bool is_isosceles(triangle_t t) {
   return is_triangle(t) && (t.a == t.b || t.b == t.c || t.a == t.c);
}
bool is_scalene(triangle_t t) {
   return is_triangle(t) && t.a != t.b && t.b != t.c && t.a != t.c;
}


/*
triange.h

#include <stdbool.h>
#ifndef TRIANGLE_H
#define TRIANGLE_H
typedef struct {
   double a;
   double b;
   double c;
} triangle_t;
bool is_equilateral(triangle_t t);
bool is_isosceles(triangle_t t);
bool is_scalene(triangle_t t);
#endif


*/