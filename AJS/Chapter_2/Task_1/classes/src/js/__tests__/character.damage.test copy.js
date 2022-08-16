import Character from '../character';

test.each([
  [
    ['Alex', 'Bowerman', 50, 1, 25, 25], 10, 42.5,
  ],
  [
    ['John', 'Zombie', 100, 1, 55, 80], 60, 88,
  ],
  [
    ['Crazy', 'Magician', 0, 1, 25, 25], 10, -7.5,
  ],
  [
    ['Funky', 'Daemon', -9, 1, 5, 15], 50, -9,
  ],
])(
  ('Testing method "damage", testing class Character'),
  (params, points, health) => {
    const hero = new Character(...params);

    hero.damage(points);

    expect(hero.health).toBeCloseTo(health);
  },
);
