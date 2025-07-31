#include "grade_school.h"
#include "string.h"
static int check_if_exist(roster_t *rosters, char *name, int grade)
{
    size_t i = 0;
    grade++;
    while (i < rosters->count)
    {
        if(!(strcmp(name, rosters->students[i].name)))
            return 1;
        i++;
    }
    return 0;
}
static size_t get_right_index(roster_t *rosters, char *name, int grade)
{
    size_t i = 0;
    while (i < rosters->count)
    {
        if (rosters->students[i].grade > grade)
            break;
        if (rosters->students[i].grade == grade && strcmp(rosters->students[i].name, name) > 0)
            break;
        i++;
    }
    return i;
}
static void empty_room(roster_t **rosters, size_t index)
{
    size_t i;
    i = (*rosters)->count;
    while (i > index)
    {
        (*rosters)->students[i] = (*rosters)->students[i - 1];
        i--;
    }
}
#include <stdio.h>
int add_student(roster_t *rosters, char *name, int grade)
{
    if(check_if_exist(rosters, name, grade))
        return (0);
    student_t student;
    size_t index;
    if (rosters->count == 0)
        index = rosters->count;
    else {
        index  = get_right_index(rosters, name, grade);
        if (index != rosters->count)
            empty_room(&rosters, index);
    }
    student.grade = grade;
    int j = 0;
    while(name[j])
    {
        student.name[j] = name[j];
        j++;
    }
    student.name[j] = '\0';
    rosters->students[index] = student;
    rosters->count++;
    return 1;
}
void init_roster(roster_t *roster)
{
    roster->count = 0;
}
roster_t get_grade(roster_t *roster, int desired_grade)
{
    size_t i = 0;
    roster_t new_roster;
    init_roster(&new_roster);
    while (i < roster->count)
    {
        if((roster->students[i]).grade == desired_grade)
            add_student(&new_roster, (roster->students[i]).name, desired_grade);
        i++;
    }
    return new_roster;
}


/*
grade_school.h
#ifndef GRADE_SCHOOL_H
#define GRADE_SCHOOL_H
#include <stddef.h>
#include <stdint.h>
#include <stdlib.h>
#define MAX_NAME_LENGTH 20
#define MAX_STUDENTS 20
typedef struct {
   uint8_t grade;
   char name[MAX_NAME_LENGTH];
} student_t;
typedef struct {
   size_t count;
   student_t students[MAX_STUDENTS];
} roster_t;
int add_student(roster_t *rosters, char *name, int grade);
void init_roster(roster_t *roster);
roster_t get_grade(roster_t *roster, int desired_grade);
#endif

*/