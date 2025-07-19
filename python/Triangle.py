def _is_valid_triangle(sides):
    """
    Verilen kenar uzunluklarına sahip bir üçgenin geçerli olup olmadığını kontrol eder.
    Geçerli bir üçgen için:
    1. Tüm kenar uzunlukları sıfırdan büyük olmalıdır.
    2. Üçgen eşitsizliği sağlanmalıdır (herhangi iki kenarın toplamı üçüncü kenardan büyük veya eşit olmalıdır).
    """
    a, b, c = sorted(sides)  # Kenarları küçükten büyüğe sırala
                               # Bu, üçgen eşitsizliğini kontrol ederken kolaylık sağlar:
                               # a + b >= c kontrolü yeterli olur, çünkü en büyük kenar c'dir.
                               # Diğer eşitsizlikler (a+c >= b, b+c >= a) zaten sağlanacaktır.

    # Kenar uzunluklarının sıfırdan büyük olup olmadığını kontrol et
    if a <= 0:
        return False

    # Üçgen eşitsizliğini kontrol et
    return a + b >= c


def equilateral(sides):
    """
    Verilen kenar uzunluklarına sahip bir üçgenin eşkenar olup olmadığını kontrol eder.
    Eşkenar üçgenin tüm kenarları eşit olmalı ve geçerli bir üçgen olmalıdır.
    """
    if not _is_valid_triangle(sides):
        return False

    # Tüm kenarların eşit olup olmadığını kontrol et
    return sides[0] == sides[1] == sides[2]


def isosceles(sides):
    """
    Verilen kenar uzunluklarına sahip bir üçgenin ikizkenar olup olmadığını kontrol eder.
    İkizkenar üçgenin en az iki kenarı eşit olmalı ve geçerli bir üçgen olmalıdır.
    (Eşkenar üçgenler de matematiksel olarak ikizkenar sayılır.)
    """
    if not _is_valid_triangle(sides):
        return False

    # Herhangi iki kenarın eşit olup olmadığını kontrol et
    return sides[0] == sides[1] or sides[1] == sides[2] or sides[0] == sides[2]


def scalene(sides):
    """
    Verilen kenar uzunluklarına sahip bir üçgenin çeşitkenar olup olmadığını kontrol eder.
    Çeşitkenar üçgenin tüm kenarları farklı uzunlukta olmalı ve geçerli bir üçgen olmalıdır.
    """
    if not _is_valid_triangle(sides):
        return False

    # Tüm kenarların birbirinden farklı olup olmadığını kontrol et
    return not (sides[0] == sides[1] or sides[1] == sides[2] or sides[0] == sides[2])
