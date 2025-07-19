def find(search_list, value):
  """
  Bir sıralı listede ikili arama (binary search) yaparak bir değeri bulur.

  Args:
    search_list: Aranacak sıralı tam sayı listesi.
    value: Aranacak tam sayı değeri.

  Returns:
    Değer bulunursa, o değerin listedeki indeksini döndürür.

  Raises:
    ValueError: Değer listede bulunamazsa "value not in array" mesajıyla bir hata fırlatır.
  """
  low = 0
  high = len(search_list) - 1

  while low <= high:
    # Orta indeksi hesapla
    # high + low yerine low + (high - low) // 2 kullanmak,
    # çok büyük sayılarda olası taşma (overflow) sorununu önler,
    # ancak Python'da tam sayı boyutu sınırı olmadığı için burada kritik değil.
    mid = low + (high - low) // 2

    # Eğer aranan değer ortadaki elemandan büyükse, sol yarıyı yok say.
    if search_list[mid] < value:
      low = mid + 1

    # Eğer aranan değer ortadaki elemandan küçükse, sağ yarıyı yok say.
    elif search_list[mid] > value:
      high = mid - 1

    # Eğer aranan değer ortadaki elemana eşitse, değer bulundu!
    else:
      return mid

  # Döngü biterse ve buraya ulaşılırsa, bu demektir ki eleman listede yoktu.
  # Bu durumda belirtilen ValueError'ı fırlatmalıyız.
  raise ValueError("value not in array")