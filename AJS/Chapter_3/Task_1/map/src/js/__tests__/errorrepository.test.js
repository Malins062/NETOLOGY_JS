import ErrorRepository, { ERROR_SEARCH_KEY } from '../errorrespository';

const arrayErrors = [
  [100, 'Code - 100: Missign file extension.'],
  [101, 'Code - 101: Missign file name.'],
  [102, 'Code - 101: Missign directory name.'],
];

const errors = new ErrorRepository();
arrayErrors.forEach((error) => errors.set(...error));
console.log(errors); // eslint-disable-line

test.each([
  arrayErrors[2],
  arrayErrors[0],
  arrayErrors[1],
  [0, ERROR_SEARCH_KEY],
  ['error', ERROR_SEARCH_KEY],
])(
  ('Testing ErrorRepository class - method translate(code)...'),
  (param, expected) => {
    const received = errors.translate(param);
    // console.log('expected: ', expected);
    // console.log('received: ', received);
    expect(expected).toBe(received);
  },
);
