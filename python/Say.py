_say = lambda x: say(x)
ones = lambda x: 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen nineteen'.split()[x]
tens = lambda x: 'zero ten twenty thirty forty fifty sixty seventy eighty ninety'.split()[x]
done = lambda f, q, r, t, h: f(q) + t
nope = lambda f, q, r, t, h: f(q) + t + h + say(r)

def say(n):
    if not (0 <= n < 1e12): 
        raise ValueError("input out of range")    

    condition, d, func, txt, hyphen = list(filter(lambda x: x[0],
        [( n <  20,           1, ones, '',           ''),
         ( n < 1e2,          10, tens, '',          '-'),
         ( n < 1e3,         100, ones, ' hundred',  ' '),
         ( n < 1e6,        1000, _say, ' thousand', ' '),
         ( n < 1e9,     1000000, _say, ' million',  ' '),
         ( n < 1e12, 1000000000, _say, ' billion',  ' ')]))[0]

    q, r = divmod(n, d)                                     
    return {0: done}.get(r, nope)(func, q, r, txt, hyphen)