import Character from './character';

export default class Undead extends Character {
  constructor(name) {
    super(
      name,
      'Undead',
      100,
      1,
      25,
      25,
    );
  }
}
