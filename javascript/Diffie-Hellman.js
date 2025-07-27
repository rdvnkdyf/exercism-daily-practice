//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
   if (![p, g].every(this.isPrime)) {
     throw new Error();
   }
    this.p = p;
    this.g = g;
  }
  isPrime(n) {
    if (n < 2) {
      return false;
    }

    for(let i = 2; i <= n/2; i++) {
      if(n % i == 0) {
        return false;
      }
    }
    return true;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error();
    }
    return this.g ** privateKey % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.p;
  }
  static getPrivateKey(p) {
        // Diffie-Hellman için özel anahtar (private key)
        // p'den büyük olamaz ve 1'den küçük olamaz.
        // Test, bu özel anahtarın rastgele olmasını ve 1 < key < p aralığında olmasını bekliyor.
        // Bu, Math.random() kullanarak p-2'ye kadar bir sayı üretip 2 ekleyerek yapılabilir.
        const min = 2; // Özel anahtar 1'den büyük olmalı
        const max = p - 1; // Özel anahtar p'den küçük olmalı

        // Rastgele bir sayı üretin (min dahil, max hariç)
        // Math.floor(Math.random() * (max - min)) + min;
        return Math.floor(Math.random() * (max - min)) + min;
    }
}