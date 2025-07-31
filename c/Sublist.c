#include "sublist.h"
#include <stdbool.h>
#include <math.h>
#include <string.h>
comparison_result_t check_lists(int *list_to_compare, int *base_list,
                                size_t list_to_compare_element_count,
                                size_t base_list_element_count){
    bool sublist = list_to_compare_element_count <= base_list_element_count;
    int* smaller_list = sublist? list_to_compare : base_list;
    int* greater_list = sublist? base_list : list_to_compare;
    size_t min_count = (size_t)fmin(list_to_compare_element_count, base_list_element_count);
    size_t max_count = (size_t)fmax(list_to_compare_element_count, base_list_element_count);
    for (size_t i=0; i<=max_count-min_count; i++) {
        if(memcmp(smaller_list, &greater_list[i], min_count*sizeof(int)) == 0){
            if(min_count == max_count) return EQUAL;
            if(sublist) return SUBLIST;
            return SUPERLIST;
        }
    }
    return UNEQUAL;
}

/*
sublist.h
#ifndef SUBLIST_H
#define SUBLIST_H

#include <stddef.h>

typedef enum { EQUAL, UNEQUAL, SUBLIST, SUPERLIST } comparison_result_t;

comparison_result_t check_lists(int *list_to_compare, int *base_list,
                                size_t list_to_compare_element_count,
                                size_t base_list_element_count);

#endif

*/