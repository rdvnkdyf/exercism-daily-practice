#include "rational_numbers.h"
int gcd(int a, int b)
{
    register int aux;
    if(a < b)
    {
        aux = a;
        a = b;
        b = aux;
    }
    if(a < 0) a = -a;
    if(b < 0) b = -b;
    if(!b) return a; // gcd(a, 0) = a
    if(b == 1) return 1; // gcd(a, 1) = 1
    if(!(a & 1) && !(b & 1))
        return gcd(a >> 1, b >> 1) << 1; // gcd(2u, 2v) = 2 gcd(u, v)
    // gcd(2u, v) = gcd(u, 2v) = gcd(u, v)
    if((!(a & 1) && (b & 1)))
        return gcd(a >> 1, b);
    if(((a & 1) && !(b & 1)))
        return gcd(a, b >> 1);
    // gcd(a, b) = gcd(a - b, b)
    return gcd(a - b, b);
}
float root(float r, int n)
{
    int i, j;
    float x, xp;
    x = xp = 1;
    for(i = 0; i < 5; ++i)
    {
        for(xp = 1, j = n - 1; j; --j) xp *= x;
        x = (n - 1) * x / n + r / (n * xp);
    }
    return x;
}
rational_t reduce(rational_t r)
{
    int g = gcd(r.numerator, r.denominator);
    r.numerator /= g;
    r.denominator /= g;
    if(r.denominator < 0)
    {
        r.denominator = -r.denominator;
        r.numerator = -r.numerator;
    }
    return r;
}
rational_t add(rational_t r1, rational_t r2)
{
    rational_t r;
    r.numerator = r1.numerator * r2.denominator + r2.numerator * r1.denominator;
    r.denominator = r1.denominator * r2.denominator;
    return reduce(r);
}
rational_t subtract(rational_t r1, rational_t r2)
{
    rational_t r;
    r.numerator = r1.numerator * r2.denominator - r2.numerator * r1.denominator;
    r.denominator = r1.denominator * r2.denominator;
    return reduce(r);
}
rational_t multiply(rational_t r1, rational_t r2)
{
    rational_t r;
    r.numerator = r1.numerator * r2.numerator;
    r.denominator = r1.denominator * r2.denominator;
    return reduce(r);
}
rational_t divide(rational_t r1, rational_t r2)
{
    rational_t r;
    r.numerator = r1.numerator * r2.denominator;
    r.denominator = r1.denominator * r2.numerator;
    return reduce(r);
}
rational_t absolute(rational_t r)
{
    r = reduce(r);
    if(r.numerator < 0) r.numerator = -r.numerator;
    return r;
}
rational_t exp_rational(rational_t b, int e)
{
    rational_t r = {1, 1};
    int aux;
    if(!e) return r;
    if(e < 0)
    {
        e = -e;
        aux = b.numerator;
        b.numerator = b.denominator;
        b.denominator = aux;
    }
    while(e--)
    {
        r.numerator *= b.numerator;
        r.denominator *= b.denominator;
    }
    return reduce(r);
}
float exp_real(float b, rational_t e)
{
    rational_t abs_e;
    float r = 1, r_;
    if(!e.numerator) return 1.;
    e = reduce(e);
    abs_e = absolute(e);
    r_ = root(b, e.denominator);
    while(abs_e.numerator--) r *= r_;
    if(e.numerator < 0) return 1.0/r;
    else        return r;
}

/*
rational_numbers.h
#ifndef RATIONAL_NUMBERS_H
#define RATIONAL_NUMBERS_H
typedef struct
{
    int numerator;
    int denominator;
}
rational_t;
int gcd(int a, int b);
float root(float r, int n);
rational_t reduce(rational_t r);
rational_t add(rational_t r1, rational_t r2);
rational_t subtract(rational_t r1, rational_t r2);
rational_t multiply(rational_t r1, rational_t r2);
rational_t divide(rational_t r1, rational_t r2);
rational_t absolute(rational_t r);
rational_t exp_rational(rational_t b, int e);
float exp_real(float b, rational_t e);
#endif
*/