import Person from './person';

export default class Swordsman extends Person {
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
