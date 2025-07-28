#include "nth_prime.h"
#include<stdbool.h>
bool prime(int n);
           
bool prime(int n){
    int i=2;
    while(n%i){
        i++;
    }return i==n;
}
uint32_t nth(uint32_t n){
    uint32_t count=0,cpt=0;
    int i=1;
    while(count<n){
        i++;
        if(prime(i)) count++,cpt=i;
    }return cpt;
}