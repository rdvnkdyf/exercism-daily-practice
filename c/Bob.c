#include "bob.h"
#include <string.h>
#include <stdbool.h>
#include <ctype.h>
char* hey_bob(char* input){
    bool empty = true, yelling = false, question = false;
    for (int i=(int)strlen(input)-1; i>=0; i--) {
        if(empty && (isalnum(input[i]) || input[i] =='?')){
            if(input[i] =='?') question=true;
            empty = false;
        }
        if(isupper(input[i])) yelling = true;
        else if(islower(input[i])){
            yelling = false;
            break;
        }
    }
    if(empty) return "Fine. Be that way!";
    if(question){
        if(yelling) return "Calm down, I know what I'm doing!";
        return "Sure.";
    }
    if(yelling) return "Whoa, chill out!";
    return "Whatever.";
}

/*
bob.h
#ifndef BOB_H
#define BOB_H

char *hey_bob(char *greeting);

#endif

*/