def square(number):
    """
    Belirtilen karedeki buğday tanesi sayısını hesaplar.
    Kare numarası 1 ile 64 arasında olmalıdır.
    """
    if not 1 <= number <= 64:
        # Kare değeri kabul edilebilir aralıkta değilse ValueError yükselt
        raise ValueError("square must be between 1 and 64")
    
    # Belirtilen karedeki buğday tanesi sayısı 2^(n-1) formülüyle hesaplanır.
    # Örneğin:
    # Kare 1: 2^(1-1) = 2^0 = 1
    # Kare 2: 2^(2-1) = 2^1 = 2
    # Kare 3: 2^(3-1) = 2^2 = 4
    return 2**(number - 1)


def total():
    """
    Satranç tahtasındaki tüm buğday tanesi sayısını hesaplar.
    Bu, 1'den 64'e kadar olan tüm karelerdeki tanelerin toplamıdır.
    Bir geometrik serinin toplamı olarak 2^64 - 1'e eşittir.
    """
    # Toplam buğday tanesi sayısı 2^64 - 1 formülüyle hesaplanır.
    # Bu, 1 + 2 + 4 + ... + 2^63 serisinin toplamıdır.
    return 2**64 - 1