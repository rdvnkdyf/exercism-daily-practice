
// high-scores.js

export class HighScores {
  constructor(scores = []) {
    this.scores = scores;
    // Eğer testin başka yerlerde 'scoreBoard'ı kullanmasını beklemiyorsa,
    // bu satırı kaldırabilirsin. Genellikle exercism'de direkt 'scores' dizisiyle çalışılır.
    // this.scoreBoard = {};
  }

  // TEST BEKLENTİSİNE GÖRE DÜZELTİLDİ:
  // 'latest' artık bir getter, yani parantezsiz çağrıldığında değeri döner.
  get latest() {
    // Eğer dizi boşsa ne yapılacağına dair bir kontrol eklemek iyi pratik olabilir
    // ama test genellikle boş diziyle çağırmaz.
    if (this.scores.length === 0) {
        return undefined; // Veya testin beklediği başka bir değer/hata
    }
    return this.scores[this.scores.length - 1];
  }

  // 'personalBest' de bir getter olmalı
  get personalBest() {
    if (this.scores.length === 0) {
        return undefined; // Veya testin beklediği başka bir değer/hata
    }
    return Math.max(...this.scores);
  }

  // 'personalTopThree' de bir getter olmalı
  get personalTopThree() {
    // Diziyi sıralamadan önce kopyalamak önemlidir, orijinal diziyi değiştirmemek için
    const sortedScores = [...this.scores].sort((a, b) => b - a);
    return sortedScores.slice(0, 3);
  }

  // Diğer fonksiyonların eğer test kodunda metot olarak çağrılıyorsa değişmesine gerek yok.
  // Ama eğer onlar da parantezsiz çağrılıp bir değer bekleniyorsa, onlar da getter yapılmalı.
  // Senin önceki kodundaki diğer fonksiyonlar muhtemelen ayrı testlerde kullanılıyor.

  // Aşağıdaki metotlar, eğer testler bunları 'HighScores' sınıfının bir metodu olarak
  // bekliyorsa ve ilgili işlevleri burada yapılıyorsa kalmalı.
  // Eğer testler bu metotları sınıfın dışındaki bağımsız fonksiyonlar olarak bekliyorsa,
  // bu metotları sınıfın dışına alıp 'export function ...' olarak tanımlaman gerekir.
  // Genellikle exercism alıştırmalarında tüm mantık sınıfın içinde metot olarak olur.

  createScoreBoard() {
    return { "The Best Ever": 1000000 };
  }

  addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
    return scoreBoard;
  }

  removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
    return scoreBoard;
  }

  updateScore(scoreBoard, player, points) {
    scoreBoard[player] += points;
    return scoreBoard;
  }

  applyMondayBonus(scoreBoard) {
    for(let x in scoreBoard){
      scoreBoard[x] += 100;
    }
    return scoreBoard;
  }

  normalizeScore(params) {
    if (typeof params.normalizeFunction === 'function' && typeof params.score === 'number') {
      return params.normalizeFunction(params.score);
    }
    console.error("Invalid parameters for normalizeScore. Expected { normalizeFunction: Function, score: Number }");
    return NaN;
  }
}