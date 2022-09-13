import Person, { ERRORS } from '../person';

test.each([
  [
    ['Alex', 'Bowerman', 100, 1, 25, 25],
    {
      name: 'Alex', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
  [
    ['Nike', 'Undead', 80, 2, 65, 15],
    {
      name: 'Nike', type: 'Undead', health: 80, level: 2, attack: 65, defence: 15,
    },
  ],
  [
    ['Mike', 'Zombie', 10, 3, 15, 100],
    {
      name: 'Mike', type: 'Zombie', health: 10, level: 3, attack: 15, defence: 100,
    },
  ],
  [
    ['', 'Zombie', 10, 3, 15, 100],
    {
      name: '', type: 'Zombie', health: 10, level: 3, attack: 15, defence: 100,
    },
  ],
  [
    ['John', 'Spiderman', 10, 3, 15, 100],
    {
      name: 'John', type: 'Spiderman', health: 10, level: 3, attack: 15, defence: 100,
    },
  ],
])(
  ('Create hero, testing class Person...'),
  (params, recieved) => {
    try {
      const expected = new Person(...params);
      expect(expected).toEqual(recieved);
    } catch (error) {
      expect([ERRORS.name, ERRORS.type]).toContain(error.message);
    }
  },
);
