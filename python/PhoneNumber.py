class PhoneNumber:
    def __init__(self, number):
        clear_number = ''
        for letter in number:
            if letter.isdigit():
                clear_number += letter
            elif letter.isalpha(): # if a phone number has letters in place of some digits.
                raise ValueError("letters not permitted")
            elif letter in ' ()-.+':
                pass
            else:  # if a phone number has punctuation in place of some digits.
                raise ValueError("punctuations not permitted")
        # if a phone number has less than 10 digits.
        if len(clear_number) < 10:
            raise ValueError("must not be fewer than 10 digits")
        # if a phone number has more than 11 digits.
        if len(clear_number) > 11:
            raise ValueError("must not be greater than 11 digits")
        # if a phone number has 11 digits, but starts with a number other than 1.
        if len(clear_number) == 11 and clear_number[0] != '1':
            raise ValueError("11 digits must start with 1")
        # if a phone number has an exchange code that starts with 0.
        if clear_number[-7] == '0':
            raise ValueError("exchange code cannot start with zero")
        # if a phone number has an exchange code that starts with 1.
        if clear_number[-7] == '1':
            raise ValueError("exchange code cannot start with one")
        # if a phone number has an area code that starts with 0.
        if clear_number[-10] == '0':
            raise ValueError("area code cannot start with zero")
        # if a phone number has an area code that starts with 1.
        if clear_number[-10] == '1':
            raise ValueError("area code cannot start with one")
        self.number = clear_number[-10:]
        self.area_code = self.number[:3]

    def pretty(self):
        return f'({self.number[:3]})-{self.number[3:6]}-{self.number[6:]}'