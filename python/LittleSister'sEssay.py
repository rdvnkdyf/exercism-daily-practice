"""
Metin düzenleme için yardımcı fonksiyonlar.
Bu fonksiyonlar, bir deneme ödevindeki metinleri manipüle etmek ve düzenlemek için tasarlanmıştır.
"""


def capitalize_title(title):
    """Başlıktaki her kelimenin ilk harfini büyük harfe dönüştürür.

    :param title: str - Başlık durumu (title casing) uygulanması gereken başlık dizesi.
    :return: str - Başlık durumu uygulanmış başlık dizesi (ilk harfleri büyük).
    """
    # title.title() metodu, bir dizedeki her kelimenin ilk harfini büyük harfe dönüştürür.
    # Diğer harfler küçük harfe dönüştürülür.
    return title.title()


def check_sentence_ending(sentence):
    """Cümlenin sonunun nokta ile bitip bitmediğini kontrol eder.

    :param sentence: str - Kontrol edilecek bir cümle.
    :return: bool - Doğru şekilde nokta ile bitiyorsa True, aksi takdirde False döndürür.
    """
    # Cümlenin boşlukları temizlenmiş halinin son karakterini kontrol ediyoruz.
    # strip() metodu cümlenin başındaki ve sonundaki boşlukları kaldırır.
    return sentence.strip().endswith('.')


def clean_up_spacing(sentence):
    """Cümlenin başında ve sonunda boşluk olup olmadığını doğrular ve temizler.

    :param sentence: str - Başındaki ve sonundaki boşluk karakterlerinden temizlenecek bir cümle.
    :return: str - Başındaki ve sonundaki boşluk karakterlerinden temizlenmiş bir cümle.
    """
    # strip() metodu, bir dizenin başındaki ve sonundaki tüm boşluk karakterlerini (boşluk, sekme, yeni satır vb.) kaldırır.
    return sentence.strip()


def replace_word_choice(sentence, old_word, new_word):
    """Verilen cümlede bir kelimeyi yeni bir kelimeyle değiştirir.

    :param sentence: str - Kelimelerin değiştirileceği bir cümle.
    :param old_word: str - Değiştirilecek kelime.
    :param new_word: str - Yeni kelime.
    :return: str - Eski kelimelerin yerine yeni kelimelerin geçtiği giriş cümlesi.
    """
    # replace() metodu, bir dizedeki belirli bir alt dizeyi başka bir alt dizeyle değiştirir.
    # Burada tüm eşleşmeleri değiştirmek için kullanılır.
    return sentence.replace(old_word, new_word)
