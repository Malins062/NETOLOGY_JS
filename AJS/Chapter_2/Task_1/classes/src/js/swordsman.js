import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    super(
      name,
      'Swordsman',
      100,
      1,
      40,
      10,
    );
  }
}
