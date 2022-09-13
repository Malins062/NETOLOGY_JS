import Person from './person';

export default class Magician extends Person {
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
