import StonedCharacter from './stonedCharacter';

export default class Daemon extends StonedCharacter {
  constructor(name) {
    super(
      name,
      'Daemon',
      100,
      1,
      10,
      40,
      false,
    );
  }
}
