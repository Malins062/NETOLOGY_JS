import Settings from '../settings';

test.each([
  [
    {},
    {
      theme: 'dark',
      music: 'trance',
      difficulty: 'easy',
    },
  ],
  [
    undefined,
    {
      theme: 'dark',
      music: 'trance',
      difficulty: 'easy',
    },
  ],
  [
    {
      theme: 'gray',
    },
    {
      theme: 'gray',
      music: 'trance',
      difficulty: 'easy',
    },
  ],
  [
    {
      theme: 'dark',
      music: 'rap',
      hobby: 'sport',
    },
    {
      theme: 'dark',
      music: 'trance',
      difficulty: 'easy',
    },
  ],
])(
  ('Testing Setting class and method get()...'),
  (param, expectedParam) => {
    const mySettings = new Settings(param);
    const received = mySettings.get();

    const expected = new Map();
    Object.keys(expectedParam).forEach((key) => {
      expected.set(key, expectedParam[key]);
    });

    // console.log('params: ', param, expectedParam);
    // console.log('expected: ', expected);
    // console.log('received: ', received);
    expect(expected).toEqual(received);
  },
);
