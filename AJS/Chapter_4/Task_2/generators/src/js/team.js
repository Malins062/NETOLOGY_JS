export default class Team {
  constructor(heroes) {
    this.heroes = Array.isArray(heroes) ? heroes : [];
  }

  * [Symbol.iterator]() {
    if (this.heroes.length < 1) {
      return undefined;
    }

    let index = 0;
    while (index < this.heroes.length) {
      yield this.heroes[index];
      index += 1;
    }

    return undefined;
  }
}
