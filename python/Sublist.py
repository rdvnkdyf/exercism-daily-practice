"""
This exercise stub and the test suite contain several enumerated constants.

Enumerated constants can be done with a NAME assigned to an arbitrary,
but unique value. An integer is traditionally used because it’s memory
efficient.
It is a common practice to export both constants and functions that work with
those constants (ex. the constants in the os, subprocess and re modules).

You can learn more here: https://en.wikipedia.org/wiki/Enumerated_type
"""

# Possible sublist categories.
# Change the values as you see fit.
SUBLIST = -1
SUPERLIST = 1
EQUAL = 0
UNEQUAL = 2
def is_sublist(short, long):
    """Return True if 'short' is a contiguous sublist of 'long'."""
    n, m = len(short), len(long)
    if n == 0:
        return True
    for i in range(m - n + 1):
        if long[i:i+n] == short:
            return True
    return False
def sublist(list_one, list_two):
    if list_one == list_two:
        return EQUAL
    if is_sublist(list_one, list_two):
        return SUBLIST
    if is_sublist(list_two, list_one):
        return SUPERLIST
    return UNEQUAL