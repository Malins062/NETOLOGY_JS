import Team from '../team';
import Daemon from '../daemon';
import Undead from '../undead';

test('Testing Team class - method addAll()...', () => {
  const newTeam = new Team();
  const character1 = new Daemon('Alex');
  const character2 = new Daemon('Mike');
  const character3 = new Undead('Nike');

  const arrayCharacters = [character1, character2, character3];
  const expected = new Set(arrayCharacters);

  newTeam.addAll(...arrayCharacters);
  // console.log('expected: ', expected);
  // console.log('received: ', newTeam.members);
  expect(expected).toEqual(newTeam.members);

  arrayCharacters.push({ attack: 20 });
  newTeam.addAll(...arrayCharacters);
  expect(expected).toEqual(newTeam.members);
});
