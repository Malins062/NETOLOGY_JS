export default class Team {
  constructor(heroes) {
    this.heroes = Array.isArray(heroes) ? heroes : [];
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.heroes;

    return {
      next: () => {
        index += 1;
        return {
          value: data[index],
          done: !(index in data),
        };
      },
    };
  }
}
