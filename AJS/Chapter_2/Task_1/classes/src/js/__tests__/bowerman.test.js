import Bowerman from '../bowerman';

test.each([
  [
    'Alex',
    {
      name: 'Alex', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
  [
    'Lilly',
    {
      name: 'Lilly', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
    },
  ],
])(
  ('Create hero - "Bowerman", testing class Bowerman'),
  (params, recieved) => {
    const expected = new Bowerman(params);

    expect(expected).toEqual(recieved);
  },
);
