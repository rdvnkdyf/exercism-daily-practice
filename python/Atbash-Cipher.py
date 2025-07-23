from string import ascii_lowercase, digits

def add_spaces(lst):
    i = 5
    while i < len(lst):
        lst.insert(i, ' ')
        i += 6
    return lst

def change(char):
    legend = { pair[0]: pair[1] for pair in zip(list(ascii_lowercase), reversed(list(ascii_lowercase))) }
    if char.isalpha():
        return legend[char]
    elif char.isdigit():
        return char
    else:
        return None

def encode(string):
    return ''.join(add_spaces([change(letter) for letter in string.lower() if change(letter)]))

def decode(string):
    return ''.join([change(letter) for letter in string if change(letter)])