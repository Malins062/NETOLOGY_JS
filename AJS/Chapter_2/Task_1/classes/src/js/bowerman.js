import Character from './character';

export default class Bowerman extends Character {
  constructor(name) {
    super(
      name,
      'Bowerman',
      100,
      1,
      25,
      25,
    );
  }
}
