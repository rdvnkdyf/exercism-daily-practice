def palindrome(s):
    s = str(s)
    return s[::-1] == s
    
def largest(min_factor, max_factor):
    factors_list = []
    if min_factor > max_factor:
        raise ValueError("min must be <= max")
    for x in range(max_factor ** 2, min_factor ** 2 - 1, -1):
        if palindrome(x):
            for y in range(min_factor, max_factor + 1):
                if x % y == 0 and min_factor <= x / y <= max_factor:
                    factors_list.append([y, int(x / y)])
        if factors_list:
            return x, factors_list
    return None, factors_list 
    
def smallest(min_factor, max_factor):
    factors_list = []
    if min_factor > max_factor:
        raise ValueError("min must be <= max")
    for x in range(min_factor ** 2, (max_factor+1) ** 2):
        if palindrome(x):
            for y in range(min_factor, max_factor + 1):
                if x % y == 0 and min_factor <= x / y <= max_factor:
                    factors_list.append([y, int(x / y)])
        if factors_list:
            return x, factors_list
    return None, factors_list