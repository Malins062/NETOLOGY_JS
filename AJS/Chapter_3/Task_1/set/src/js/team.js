import Character from './character';

const ERROR_CHARACTER_EXISTS = 'Выбранный персонаж, уже сущесвтует в команде!';

class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (character instanceof Character) {
      if (this.members.has(character)) {
        throw new Error(ERROR_CHARACTER_EXISTS);
      } else {
        this.members.add(character);
      }
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      if (character instanceof Character && !this.members.has(character)) {
        this.members.add(character);
      }
    }
  }

  toArray() {
    const array = Array.from(this.members);
    this.members = array;
  }
}

export { Team as default, ERROR_CHARACTER_EXISTS };
