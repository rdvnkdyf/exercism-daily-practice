STATUS_WIN = "win"
STATUS_LOSE = "lose"
STATUS_ONGOING = "ongoing"

class Hangman(object):
    def __init__(self, word):
        self.word = word
        self.remaining_guesses = 9
        self.status = STATUS_ONGOING
        self.masked_word = ['_'] * len(word)
        self.guesses = {} # Tahmin edilen harfleri tutmak için yeni bir set ekleyelim, char in self.guesses.keys() yerine char in self.guesses kullanabiliriz
                               # Veya mevcut haliyle bırakabiliriz, ama set veya dict'in anahtarını kontrol etmek daha doğru.

    def guess(self, char):
        # Oyun bitmişse hata fırlat
        if self.status != STATUS_ONGOING:
            raise ValueError('The game has already ended.') # Burası düzeltildi!

        # Tahmin daha önce yapılmışsa veya yanlışsa
        # Ayrıca, char'ın daha önce tahmin edilip edilmediğini de kontrol etmeliyiz.
        # Eğer char zaten guessed setinde ise, bu da yanlış tahmin sayılmalı ve deneme hakkı gitmeli.
        if char in self.guesses: # Eğer harf zaten tahmin edildiyse
            self.remaining_guesses -= 1 # Deneme hakkını azalt
        elif char not in self.word: # Eğer harf kelimede yoksa
            self.remaining_guesses -= 1 # Deneme hakkını azalt
        
        # Her durumda tahmin edilen harfi kaydet (doğru veya yanlış)
        self.guesses[char] = True 
        
        # Deneme hakkı bittiğinde oyunu kaybetmiş say
        if self.remaining_guesses < 0: # -1 değil, 0'dan küçük olması daha doğru kontrol
            self.status = STATUS_LOSE
        
        # Eğer harf kelimede varsa ve daha önce tahmin edilmemişse (ki yukarıda kontrol ettik)
        if char in self.word and self.remaining_guesses >= 0: # Sadece kalan hak 0 veya üstündeyse devam et
            indices = [i for i, letter in enumerate(self.word) if letter == char]
            for idx in indices:
                self.masked_word[idx] = char
            
            # Kelime tamamen tahmin edildi mi kontrol et
            if ''.join(self.masked_word) == self.word:
                self.status = STATUS_WIN

    def get_masked_word(self):
        return ''.join(self.masked_word)

    def get_status(self):
        return self.status