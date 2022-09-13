import Person from './person';

export default class Bowerman extends Person {
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
