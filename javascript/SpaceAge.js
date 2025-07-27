const RATIO = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
},
EARTH_YEAR = 31557600

export function age(planet, seconds) {
    // Koşulu burada kontrol et: planet, RATIO objesinde mevcut mu?
    if (!RATIO[planet]) { // Eğer RATIO objesinde böyle bir gezegen yoksa (tanımsızsa)
        throw new Error("not a planet"); // <-- Bu hatayı fırlat!
    }

    // Eğer gezegen varsa, hesaplamaya devam et
    return Number((seconds / EARTH_YEAR / RATIO[planet]).toFixed(2));
}