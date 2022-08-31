import StonedCharacter from './stonedCharacter';

export default class Magician extends StonedCharacter {
  constructor(name) {
    super(
      name,
      'Magician',
      100,
      1,
      10,
      40,
    );
  }
}
