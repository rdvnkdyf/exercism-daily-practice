/*
allergies.c
#include <stdio.h>
#include "allergies.h"
bool
is_allergic_to(const allergen_t item, const uint16_t score)
{
    return ((1 << item) & score) > 0;
}
allergen_list_t
get_allergens(const uint16_t score)
{
    allergen_list_t list;
    list.count = 0;
    for (allergen_t item = ALLERGEN_EGGS
        ; item < ALLERGEN_COUNT
        ; item++)
    {
        list.allergens[item] = is_allergic_to(item, score);
        if (list.allergens[item]) list.count++;
    }
    return list;
}

*/
/*
allergies.h
#ifndef ALLERGIES_H
#define ALLERGIES_H
#include <stdbool.h>
#include <stdint.h>
typedef enum {
   ALLERGEN_EGGS = 0,
   ALLERGEN_PEANUTS,
   ALLERGEN_SHELLFISH,
   ALLERGEN_STRAWBERRIES,
   ALLERGEN_TOMATOES,
   ALLERGEN_CHOCOLATE,
   ALLERGEN_POLLEN,
   ALLERGEN_CATS,
   ALLERGEN_COUNT,
} allergen_t;
typedef struct {
   int count;
   bool allergens[ALLERGEN_COUNT];
} allergen_list_t;
bool is_allergic_to(const allergen_t item, const uint16_t val);
allergen_list_t get_allergens(const uint16_t score);
#endif

*/