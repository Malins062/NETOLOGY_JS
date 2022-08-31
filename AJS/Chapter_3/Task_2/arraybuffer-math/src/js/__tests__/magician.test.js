import Magician from '../magician';

test.each([
  [
    'Craus',
    {
      name: 'Craus', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    },
  ],
  [
    'Totty',
    {
      name: 'Totty', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    },
  ],
])(
  ('Create hero - "Magician", testing class Magician'),
  (name, recieved) => {
    const expected = new Magician(name);

    expect(expected).toEqual(recieved);
  },
);
