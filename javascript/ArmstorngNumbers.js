export const isArmstrongNumber = (number) => {
  // İlk kontrol: Eğer sayı 0 ise, doğrudan true döndür.
  // Bu, testin beklediği davranışı sağlar.
  if (number === 0) {
    return true;
  }

  // Eğer sayının tipi BigInt ise, toString() ve BigInt() kullanarak işlemleri yapmalısın.
  // Eğer normal sayı ise, parseInt() ve Math.pow() kullanmalısın.
  // Test kodunda BigInt literal'ler (sonunda 'n' olan sayılar) olduğu için
  

  // Sayıyı string'e çevirerek basamaklarına eriş
  const numStr = String(number);
  const numDigits = numStr.length; // Basamak sayısı

  let sum = 0n; // Toplamı BigInt olarak başlat (eğer büyük sayılarla çalışıyorsak)

  for (let i = 0; i < numDigits; i++) {
    const digit = BigInt(parseInt(numStr[i], 10)); // Her basamağı BigInt'e çevir
    // Basamağın, toplam basamak sayısı kadar üssünü al
    sum += digit ** BigInt(numDigits); // BigInt üs alma
  }

  // Hesaplanan toplam, orijinal sayıya eşit mi kontrol et
  // Eğer orijinal sayı da BigInt ise, karşılaştırma da BigInt olarak yapılmalı.
  // Testteki bigInput'lar BigInt olduğu için number'ı da BigInt'e çevirerek karşılaştırıyoruz.
  return sum === BigInt(number);
};