#include "matching_brackets.h"
#define MAX_PAIRS 100
bool is_paired(const char *input)
{
    bool result;
    // pointer is NULL
    if (input == NULL)
    {
        result = false;
    }
    else
    {
        // true until proven otherwise
        result = true;
        // using a stack to keep track of brackets
        char stack[MAX_PAIRS] = "\0";
        int depth = 1;  // start at 1 as to not break the program
        int limit = strlen(input);
        for (int i = 0; i < limit; i++)
        {
            // insert into stack
            if ( (input[i] == '(') || (input[i] == '[') || (input[i] == '{') ) 
            {
                stack[depth] = input[i];
                depth++;
            }
            // remove from stack
            else if ( (input[i] == ')') || (input[i] == ']') || (input[i] == '}') )
            {
                // )]} are 1 or 2 spaces after ([{
                if ( (stack[depth-1] == (input[i] - 1)) || (stack[depth-1] == (input[i] - 2)) )
                {
                    depth--;
                }
                else
                {
                    depth = MAX_PAIRS;
                    break;
                }
            }
        }
        // unpaired brackets remain
        if (depth > 1)
        {
            result = false;
        }
    }
    return result;
}
/*
matching_brackets.h
#ifndef MATCHING_BRACKETS_H
#define MATCHING_BRACKETS_H

#include <stdbool.h>
#include <string.h>
bool is_paired(const char *input);

#endif

*/