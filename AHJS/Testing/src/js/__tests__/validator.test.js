import { isValidCard } from '../validators';

test.each([
  ['МИР for valid card number', '2200240768512994', 'mir'],
  ['MasterCard for valid card number', '5346028387436812', 'master'],
  ['American Express for valid card number', '348446461372266', 'amex'],
  ['VISA for valid card number', '4556737586899855', 'visa'],
  ['Diners Club for valid card number', '36471414338070', 'diners'],
  ['false for invalid card number', '2200240768512991', false],
  ['false for invalid card number', ' ', false],
  ['false for invalid card number', ' assa', false],
  ['false for invalid card number', '36471414338070 ', false],
])(('It should be %s'), (_, input, expected) => {
  if (!Boolean(expected)) {
    expect(isValidCard(input)).toBe(expected);
  } else {
    expect(isValidCard(input)).toContainEqual(expected);
  }
});
