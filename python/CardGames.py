"""
Poker ellerini takip etmek ve çeşitli kart görevlerini yerine getirmek için fonksiyonlar.
Bu modül, tur numaralarını yönetme, kart değerlerinin ortalamalarını hesaplama
ve belirli kart değerlerine göre elleri dönüştürme gibi işlevleri sağlar.
"""


def get_rounds(number):
    """Mevcut ve sonraki iki tur numarasını içeren bir liste oluşturur.

    :param number: int - Mevcut tur numarası.
    :return: list - Mevcut tur ve onu takip eden iki tur.
    """
    # Mevcut tur numarasını ve sonraki iki turu içeren bir liste oluşturur.
    # Örneğin, number 10 ise [10, 11, 12] döndürür.
    return [number, number + 1, number + 2]


def concatenate_rounds(rounds_1, rounds_2):
    """İki tur numarası listesini birleştirir.

    :param rounds_1: list - Oynanan ilk tur listesi.
    :param rounds_2: list - Oynanan ikinci tur listesi.
    :return: list - Oynanan tüm turlar.
    """
    # İki listeyi '+' operatörü ile birleştirir.
    # Bu, her iki listenin elemanlarını içeren yeni bir liste döndürür.
    return rounds_1 + rounds_2


def list_contains_round(rounds, number):
    """Tur listesinin belirtilen numarayı içerip içermediğini kontrol eder.

    :param rounds: list - Oynanan turlar.
    :param number: int - Tur numarası.
    :return: bool - Tur oynandı mı?
    """
    # 'in' operatörü, bir öğenin bir listede olup olmadığını kontrol etmenin Pythonik yoludur.
    return number in rounds


def card_average(hand):
    """Listeden kart değerlerinin ortalamasını hesaplar ve döndürür.

    :param hand: list - Eldeki kartlar.
    :return: float - Eldeki kartların ortalama değeri.
    """
    # Eğer el boşsa, sıfır bölme hatasını önlemek için 0.0 döndürürüz.
    if not hand:
        return 0.0
    # Listedeki tüm kart değerlerinin toplamını hesaplarız.
    total_sum = sum(hand)
    # Toplamı kart sayısına bölerek ortalamayı buluruz.
    # Sonucun float olmasını sağlamak için len(hand) float'a dönüştürülür.
    return float(total_sum) / len(hand)


def approx_average_is_average(hand):
    """(İlk ve son kart değerlerinin ortalaması) VEYA ('orta' kart) == hesaplanan ortalama ise döndürür.

    :param hand: list - Eldeki kartlar.
    :return: bool - Yaklaşık ortalamalardan biri 'gerçek ortalamaya' eşit mi?
    """
    true_average = card_average(hand)

    # Yaklaşık ortalama 1: İlk ve son kartın ortalaması.
    # Elin en az bir kart içerdiğinden emin olmalıyız.
    if len(hand) >= 1:
        approx_avg_first_last = (hand[0] + hand[-1]) / 2.0
        if approx_avg_first_last == true_average:
            return True

    # Yaklaşık ortalama 2: Ortadaki kartın değeri.
    # Elin tek sayıda kart içerdiğinden emin olmalıyız (orta kart için).
    # Örneğin, [1, 2, 3] için orta kart 2'dir (dizin 1).
    # [1, 2, 3, 4] için orta kart yoktur, bu yüzden bu kontrolü atlarız.
    if len(hand) % 2 == 1:  # Tek sayıda eleman varsa
        middle_index = len(hand) // 2
        middle_card = hand[middle_index]
        if middle_card == true_average:
            return True

    # Hiçbir yaklaşık ortalama gerçek ortalamaya eşit değilse.
    return False


def average_even_is_average_odd(hand):
    """(Çift dizinli kart değerlerinin ortalaması) == (tek dizinli kart değerlerinin ortalaması) ise döndürür.

    :param hand: list - Eldeki kartlar.
    :return: bool - Çift ve tek ortalamalar eşit mi?
    """
    even_indexed_cards = []
    odd_indexed_cards = []

    # Kartları dizinlerine göre ayırırız.
    for i, card in enumerate(hand):
        if i % 2 == 0:  # Çift dizin
            even_indexed_cards.append(card)
        else:  # Tek dizin
            odd_indexed_cards.append(card)

    # Çift dizinli kartların ortalamasını hesaplarız.
    # Eğer liste boşsa, sıfır bölme hatasını önlemek için 0.0 kullanırız.
    avg_even = sum(even_indexed_cards) / len(even_indexed_cards) if even_indexed_cards else 0.0
    # Tek dizinli kartların ortalamasını hesaplarız.
    avg_odd = sum(odd_indexed_cards) / len(odd_indexed_cards) if odd_indexed_cards else 0.0

    # İki ortalamanın eşit olup olmadığını karşılaştırırız.
    return avg_even == avg_odd


def maybe_double_last(hand):
    """Son dizin konumundaki Vale (Jack) kart değerini 2 ile çarpar.

    :param hand: list - Eldeki kartlar.
    :return: list - Vale (Jack) kartlarının (varsa) değeri ikiye katlanmış el.
    """
    # Eğer el boşsa veya son kart Vale (11) değilse, eli olduğu gibi döndürürüz.
    if not hand or hand[-1] != 11:
        return hand
    else:
        # Elin bir kopyasını oluştururuz ki orijinal listeyi değiştirmeyelim.
        # Son kartın değerini ikiye katlarız.
        modified_hand = list(hand) # Orijinal listeyi değiştirmemek için kopyasını alıyoruz.
        modified_hand[-1] *= 2
        return modified_hand
