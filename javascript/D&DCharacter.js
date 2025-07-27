const abilityModifier = (constitution) => {
  if (constitution < 3) throw new Error('Ability scores must be at least 3');
  if (constitution > 18) throw new Error('Ability scores can be at most 18')
  return Math.floor((constitution - 10) / 2);
};

const ABILITIES = [
  'strength', 'dexterity', 'constitution', 'intelligence' , 'wisdom', 'charisma',
];

class Character {
  constructor() {
    for (const ability of ABILITIES) {
      this[ability] = Character.rollAbility();
    }
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }

  static rollAbility() {
    const rolls = [0, 0, 0, 0]
      .map(() => Math.floor(Math.random() * 6) + 1);
    return rolls
      .sort()
      .slice(1)
      .reduce((accum, e) => accum + e, 0);
  }
}

export { Character, abilityModifier };
