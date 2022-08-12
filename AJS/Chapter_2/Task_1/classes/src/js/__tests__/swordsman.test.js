import Swordsman from '../swordsman';

test.each([
  [
    'Piter',
    {
      name: 'Piter', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
  [
    'Lolly',
    {
      name: 'Lolly', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    },
  ],
])(
  ('Create hero - "Swordsman", testing class Swordsman'),
  (params, recieved) => {
    const expected = new Swordsman(params);

    expect(expected).toEqual(recieved);
  },
);
