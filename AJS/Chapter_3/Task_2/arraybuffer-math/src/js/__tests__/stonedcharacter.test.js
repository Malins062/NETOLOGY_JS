import Daemon from '../daemon';
import Magician from '../magician';

test.each([
  [true, '100 3', true, 72.0751],
  [false, '100 3', false, 80],
  ['', '100 4', false, 70],
  [false, '100 0', false, 100],
  [false, '90 s', false, 90],
  [false, 's 4', false, 7],
  [true, '100 2', true, 85],
])(
  ('Testing class StonedCharacter...'),
  (isStoned, paramsAttack, expectStoned, expectAttack) => {
    const daemon = new Daemon('Nike');
    const magician = new Magician('John');

    daemon.stoned = isStoned;
    magician.stoned = isStoned;
 
    expect(expectStoned).toBe(daemon.stoned);
    expect(expectStoned).toBe(magician.stoned);

    daemon.Attack = paramsAttack;
    magician.Attack = paramsAttack;

    expect(expectAttack).toBeCloseTo(daemon.Attack);
    expect(expectAttack).toBeCloseTo(magician.Attack);
  },
);
