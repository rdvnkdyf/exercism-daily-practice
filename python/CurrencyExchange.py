"""Functions for calculating steps in exchanging currency.

Python numbers documentation: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex

Overview of exchanging currency when travelling: https://www.compareremit.com/money-transfer-tips/guide-to-exchanging-currency-for-overseas-travel/
"""



def exchange_money(budget, exchange_rate):
    """Paranızı döviz kuruna göre dönüştürür.

    :param budget: float - dönüştürmeyi düşündüğünüz para miktarı.
    :param exchange_rate: float - yabancı para biriminin birim değeri (kur).
    :return: float - alabileceğiniz yabancı para biriminin dönüştürülmüş değeri.
    """
    return budget / exchange_rate


def get_change(budget, exchanging_value):
    """Başlangıç paranızdan döviz bozdurduktan sonra kalan miktarı hesaplar.

    :param budget: float - sahip olduğunuz para miktarı.
    :param exchanging_value: float - şu anda dönüştürmek istediğiniz para miktarı.
    :return: float - dönüştürme sonrası başlangıç para biriminizden kalan miktar.
    """
    return budget - exchanging_value


def get_value_of_bills(denomination, number_of_bills):
    """Belirli bir banknot değerinden kaç adet olduğunuza göre toplam değeri hesaplar.

    :param denomination: int - bir banknotun değeri.
    :param number_of_bills: int - toplam banknot sayısı.
    :return: int - banknotların hesaplanan toplam değeri.
    """
    return denomination * number_of_bills


def get_number_of_bills(amount, denomination):
    """Belirli bir miktardan belirli değerde kaç adet banknot elde edilebileceğini hesaplar.

    :param amount: float - toplam başlangıç değeri.
    :param denomination: int - tek bir banknotun değeri.
    :return: int - miktardan elde edilebilecek banknot sayısı.
    """
    return int(amount // denomination)


def get_leftover_of_bills(amount, denomination):
    """Belirli bir miktardan banknotları ayırdıktan sonra kalan "artık" miktarı hesaplar.

    :param amount: float - toplam başlangıç değeri.
    :param denomination: int - tek bir banknotun değeri.
    :return: float - mevcut banknot değerine göre "artık" kalan miktar.
    """
    return amount % denomination


def exchangeable_value(budget, exchange_rate, spread, denomination):
    """Bütçeniz, döviz kuru, kur farkı (spread) ve banknot değerini göz önünde bulundurarak alabileceğiniz maksimum değeri hesaplar.

    :param budget: float - dönüştürmeyi planladığınız para miktarı.
    :param exchange_rate: float - yabancı para biriminin birim değeri.
    :param spread: int - kur farkı olarak alınan yüzde.
    :param denomination: int - tek bir banknotun değeri.
    :return: int - alabileceğiniz maksimum değer (banknot cinsinden yuvarlanmış).
    """
    # Kur farkını exchange_rate'e ekleyerek gerçek kuru bulalım
    adjusted_exchange_rate = exchange_rate * (1 + spread / 100)
    
    # Bütçeyi ayarlanmış kur ile dövizde ne kadar alacağımızı hesaplayalım
    exchanged_amount = budget / adjusted_exchange_rate
    
    # Bu miktardan, verilen banknot değerine göre tam olarak kaç banknot alabileceğimizi bulalım
    num_bills = int(exchanged_amount // denomination)
    
    # Alabileceğimiz banknotların toplam değerini döndürelim
    return num_bills * denomination