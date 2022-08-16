import Zombie from '../zombie';

test.each([
  [
    'Gimmy',
    {
      name: 'Gimmy', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
  [
    'Mersedes',
    {
      name: 'Mersedes', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
])(
  ('Create hero - "Zombie", testing class Zombie'),
  (params, recieved) => {
    const expected = new Zombie(params);

    expect(expected).toEqual(recieved);
  },
);
