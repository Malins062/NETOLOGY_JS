import Undead from '../undead';

test.each([
  [
    'Alexander',
    {
      name: 'Alexander', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
  [
    'Molly',
    {
      name: 'Molly', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
])(
  ('Create hero - "Undead", testing class Undead'),
  (params, recieved) => {
    const expected = new Undead(params);

    expect(expected).toEqual(recieved);
  },
);
