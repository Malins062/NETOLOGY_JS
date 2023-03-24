import { checkCoordinates } from '../../widgets/timeline/js/utils';

test.each([
  ['51.50851, -0.12572', { lat: '51.50851', lon: '-0.12572' }],
  ['51.50851,-0.12572', { lat: '51.50851', lon: '-0.12572' }],
  ['[51.50851, -0.12572]', { lat: '51.50851', lon: '-0.12572' }],
  [null, null],
  [25, null],
  ['[5551.50851, -220.12572]', false],
  ['-220.12572]', false],
  ['45 67', false],
])(
  ('Testing method "checkCoordinates", checking valid format GPS coordinates...'),
  (param, expected) => {
    try {
      const checkedData = checkCoordinates(param);
      expect(checkedData).toEqual(expected);
    } catch (error) {
      expect(false).toBe(expected);
    }
  },
);
