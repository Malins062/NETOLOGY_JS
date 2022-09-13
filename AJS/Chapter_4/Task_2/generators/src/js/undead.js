import Person from './person';

export default class Undead extends Person {
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
