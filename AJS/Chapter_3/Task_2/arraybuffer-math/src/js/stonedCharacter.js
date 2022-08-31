import Character from './character';

const DAMAGE_ARRAY = new Uint8Array([100, 90, 80, 70, 60]);

export default class StonedCharacter extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type, health, level, attack, defence);
    this.attack = attack;
    this.isStoned = false;
    this.position = 1;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    if (typeof value === 'boolean') {
      this.isStoned = value;
    }
  }

  get attack() {
    const damage = DAMAGE_ARRAY[this.position - 1];
    this.attack *= (damage / 100);
    if (this.isStoned) {
      this.attack -= (Math.log2(this.position) * 5);
    }
    return this.attack;
  }

  /*
  Сеттер текущей силы атаки и позиции по которой наносится удар
    params = {
      position: 1,
      attack: 100
    }
  */
  set attack(value) {
    const [attack, position] = value.split(' ');
    if (attack >= 0 && attack <= 100) {
      this.attack = attack
    }
    if (position > 0 && position < 6) {
      this.position = position
    }
  }
}
