import random
import string

class Cipher:
    ALPHABET = "abcdefghijklmnopqrstuvwxyz"
    def __init__(self, key=None):
        if key:
            self.key = key
        else:
            self.key = self.generate_key()

    @classmethod
    def generate_key(cls):
        letters = string.ascii_lowercase
        return ''.join(random.choice(letters) for i in range(100))
    
    def encode(self, text):
        return ''.join(self._encode_char(pos, char) for pos, char in enumerate(text))

    def decode(self, text):
        return ''.join(self._decode_char(pos, char) for pos, char in enumerate(text))

    def _encode_char(self, pos, char):
        key_char = self.key[pos % len(self.key)]
        key_index = self.ALPHABET.index(key_char)
        return self.ALPHABET[(self.ALPHABET.index(char) + key_index) % 26]

    def _decode_char(self, pos, char):
        key_char = self.key[pos % len(self.key)]
        key_index = self.ALPHABET.index(key_char)
        return self.ALPHABET[(self.ALPHABET.index(char) - key_index) % 26]