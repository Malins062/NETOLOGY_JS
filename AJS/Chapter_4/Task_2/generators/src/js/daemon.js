import Person from './person';

export default class Daemon extends Person {
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
