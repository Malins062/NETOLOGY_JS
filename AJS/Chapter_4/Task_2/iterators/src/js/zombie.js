import Person from './person';

export default class Zombie extends Person {
  constructor(name) {
    super(
      name,
      'Zombie',
      100,
      1,
      40,
      10,
    );
  }
}
