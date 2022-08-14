import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(
      name,
      'Daemon',
      100,
      1,
      10,
      40,
    );
  }
}
