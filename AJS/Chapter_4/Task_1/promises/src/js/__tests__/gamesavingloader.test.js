import GameSavingLoader, { ERROR_OBJECT } from '../gamesavingloader';

test.each([
  [undefined,
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    },
  ],
  [
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    },
  ],
  [
    '{"id":"s9","created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
    ERROR_OBJECT,
  ],
  [
    '{"id":9,"created":1546300800}',
    ERROR_OBJECT,
  ],
  [
    '',
    ERROR_OBJECT,
  ],
])(
  ('Testing method "load", testing class GameSavingLoader...'),
  async (param, expected) => {
    try {
      const savingData = await GameSavingLoader.load(param);
      expect(savingData).toEqual(expected);
    } catch (error) {
      expect(error.message).toContain(expected);
    }
  },
);
