#include "linked_list.h"
struct list_node {
   struct list_node *prev, *next;
   ll_data_t data;
};
struct list {
   struct list_node *first, *last;
};
struct list *list_create(void) {
    struct list *p = (struct list *)malloc(sizeof(struct list));
    p->first = NULL;
    p->last = NULL;
    return p;
}
size_t list_count(const struct list *list) {
    struct list_node *p = list->first;
    size_t c=0;
    // if (list->first == NULL) return 0;
    while(p!=NULL) {
        c++;
        p=p->next;
    }
    return c;
}
void list_push(struct list *list, ll_data_t item_data) {
    struct list_node *new_node = (struct list_node *)malloc(sizeof(struct list_node));
    new_node->data = item_data;
    new_node->next = NULL;
    
    if (list->last == NULL) {
        new_node->prev = NULL;
        list->first = new_node;
        list->last = new_node;
    } else {
        new_node->prev = list->last;
        list->last->next = new_node;
        list->last = new_node;
    }
}
ll_data_t list_pop(struct list *list) {
    struct list_node *last_node = list->last;
    ll_data_t data = last_node->data;
    list->last = last_node->prev;
    if (list->last == NULL) {
        list->first = NULL;
    } else {
        list->last->next = NULL;
    }
    free(last_node);
    return data;
}
void list_unshift(struct list *list, ll_data_t item_data) {
    struct list_node *new_node = (struct list_node *)malloc(sizeof(struct list_node));
    new_node->data = item_data;
    new_node->prev = NULL;
    if (list->first == NULL) {
        new_node->next = NULL;
        list->first = new_node;
        list->last = new_node;
    } else {
        new_node->next = list->first;
        list->first->prev = new_node;
        list->first = new_node;
    }
}
ll_data_t list_shift(struct list *list) {
    struct list_node *first_node = list->first;
    ll_data_t data = first_node->data;
    list->first = first_node->next;
    if (list->first == NULL) {
        list->last = NULL;
    } else {
        list->first->prev = NULL;
    }
    free(first_node);
    return data;
}
void list_delete(struct list *list, ll_data_t data) {
    struct list_node *p = list->first;
    while (p!=NULL) {
        if (p->data == data) {
            if (p->prev == NULL) {
                list->first = p->next;
            } else {
                p->prev->next = p->next;
            }
            if (p->next == NULL) {
                list->last = p->prev;
            } else {
                p->next->prev = p->prev;
            }
            free(p);
            break;
        }
        p = p->next;
    }
}
void list_destroy(struct list *list) {
    struct list_node *p = list->first;
    struct list_node *p2;
    while (p!=NULL) {
        p2 = p->next;
        free(p);
        p = p2;
    }
    free(list);
}

/*
linked_list.h
#ifndef LINKED_LIST_H
#define LINKED_LIST_H
#include <stddef.h>
#include <stdlib.h>
typedef int ll_data_t;
struct list;
// constructs a new (empty) list
struct list *list_create(void);
// counts the items on a list
size_t list_count(const struct list *list);
// inserts item at back of a list
void list_push(struct list *list, ll_data_t item_data);
// removes item from back of a list
ll_data_t list_pop(struct list *list);
// inserts item at front of a list
void list_unshift(struct list *list, ll_data_t item_data);
// removes item from front of a list
ll_data_t list_shift(struct list *list);
// deletes a node that holds the matching data
void list_delete(struct list *list, ll_data_t data);
// destroys an entire list
// list will be a dangling pointer after calling this method on it
void list_destroy(struct list *list);
#endif
*/