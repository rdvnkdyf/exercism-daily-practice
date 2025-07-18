"""
Kelimeler oluşturmak, dönüştürmek ve ön ekler eklemek için fonksiyonlar.
Bu modül, kelime köklerine ön ekler ekleme, kelime gruplarını biçimlendirme,
son ekleri kaldırma ve sıfatları fiillere dönüştürme gibi metin işleme görevlerini kolaylaştırır.
"""


def add_prefix_un(word):
    """Verilen kelimeye 'un' ön ekini ekler.

    :param word: str - Kök kelimeyi içeren dize.
    :return: str - 'un' ön eki eklenmiş kök kelime dizesi.
    """
    # Basitçe 'un' dizesini kelimenin başına ekleriz.
    return 'un' + word


def make_word_groups(vocab_words):
    """Bir ön ek ve kelimeleri içeren bir listeyi, ön ekle başlayan ve ardından
    ön ek eklenmiş kelimelerin geldiği bir dizeye dönüştürür.

    :param vocab_words: list - İlk dizinde ön eki olan kelime listesi.
    :return: str - Ön ekle başlayan ve ardından ön ek uygulanmış kelimelerin geldiği dize.

    Bu fonksiyon, `vocab_words` listesini alır ve ' :: ' ile ayrılmış
    ön ek ve ön ek uygulanmış kelimeleri içeren bir dize döndürür.

    Örneğin: list('en', 'close', 'joy', 'lighten'),
    şu dizeyi üretir: 'en :: enclose :: enjoy :: enlighten'.
    """
    prefix = vocab_words[0]  # Listenin ilk öğesi ön ektir.
    # Kalan kelimeler üzerinde döngü yaparız ve her birine ön eki ekleriz.
    # List comprehension kullanarak yeni bir liste oluştururuz.
    prefixed_words = [prefix + word for word in vocab_words[1:]]
    # Ön eki ve ön ekli kelimeleri ' :: ' ile birleştiririz.
    return prefix + ' :: ' + ' :: '.join(prefixed_words)


def remove_suffix_ness(word):
    """Kelimenin son ekini kaldırırken yazım kurallarını göz önünde bulundurur.

    :param word: str - Son eki kaldırılacak kelime dizesi.
    :return: str - Son eki kaldırılmış ve yazımı düzeltilmiş kelime dizesi.

    Örneğin: "heaviness" "heavy" olur, ancak "sadness" "sad" olur.
    """
    # Kelimenin sonundan 'ness' son ekini kaldırırız.
    # Kelimenin uzunluğundan 4 çıkararak 'ness' kısmını atarız.
    root_word = word[:-4]

    # Eğer kök kelime 'i' ile bitiyorsa (örn: 'heavi'), 'i'yi 'y' ile değiştiririz.
    if root_word.endswith('i'):
        return root_word[:-1] + 'y'
    # Aksi takdirde, sadece son eki kaldırılmış kök kelimeyi döndürürüz.
    return root_word


def adjective_to_verb(sentence, index):
    """Cümledeki sıfatı fiile dönüştürür.

    :param sentence: str - Kelimenin kullanıldığı cümle.
    :param index: int - Kaldırılacak ve dönüştürülecek kelimenin dizini.
    :return: str - Çıkarılan sıfatı fiile dönüştüren kelime.

    Örneğin, ("It got dark as the sun set.", 2) "darken" olur.
    """
    # Cümleyi kelimelere ayırırız.
    words = sentence.split()
    # Belirtilen dizindeki kelimeyi alırız.
    adjective = words[index]

    # Kelimenin sonundaki noktalama işaretlerini temizleriz.
    # Örneğin, "set." kelimesindeki noktayı kaldırırız.
    cleaned_adjective = adjective.strip('.,!?;:')

    # Sıfatı fiile dönüştürmek için 'en' son ekini ekleriz.
    # Bu, "dark" -> "darken" gibi yaygın bir dönüşüm kuralıdır.
    return cleaned_adjective + 'en'