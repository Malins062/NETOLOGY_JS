import Character from '../character';

test.each([
  [
    ['Alex', 'Bowerman', 0, 1, 25, 25],
    {
      level: 0, attack: 25, defence: 25, health: 100,
    },
  ],
  [
    ['Mike', 'Undead', 50, 2, 100, 100],
    {
      level: 3, attack: 120, defence: 120, health: 100,
    },
  ],
  [
    ['Nike', 'Magician', 10, 1, 50, 70],
    {
      level: 2, attack: 60, defence: 84, health: 100,
    },
  ],
])(
  ('Testing method "levelUp", testing class Character'),
  (params, recieved) => {
    const hero = new Character(...params);

    hero.levelUp();

    const expected = {
      level: hero.level,
      attack: hero.attack,
      defence: hero.defence,
      health: hero.health,
    };

    if (recieved.level === 0) {
      expect(expected).toThrow();
    } else {
      expect(expected).toEqual(recieved);
    }
  },
);
