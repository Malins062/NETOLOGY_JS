import Daemon from '../daemon';

test.each([
  [
    'Carry',
    {
      name: 'Carry', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
    },
  ],
  [
    'Jim',
    {
      name: 'Jim', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
    },
  ],
])(
  ('Create hero - "Daemon", testing class Daemon'),
  (params, recieved) => {
    const expected = new Daemon(params);

    expect(expected).toEqual(recieved);
  },
);
