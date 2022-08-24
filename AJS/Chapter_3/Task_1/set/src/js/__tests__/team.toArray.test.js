import Team from '../team';
import Daemon from '../daemon';
import Undead from '../undead';

test('Testing Team class - method toArray()...', () => {
  const newTeam = new Team();
  const character1 = new Daemon('Alex');
  const character2 = new Daemon('Jully');
  const character3 = new Undead('Nike');
  const arrayCharacters = [character1, character2, character3];

  newTeam.addAll(...arrayCharacters);
  newTeam.toArray();
  expect(arrayCharacters).toEqual(newTeam.members);
});
