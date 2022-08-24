import Team, { ERROR_CHARACTER_EXISTS } from '../team';
import Daemon from '../daemon';
import Undead from '../undead';

test('Testing Team class - method add()...', () => {
  const newTeam = new Team();
  const character1 = new Daemon('Alex');
  const character2 = new Undead('Nike');

  const expected = new Set([character1, character2]);

  newTeam.add(character1);
  newTeam.add(character2);
  expect(expected).toEqual(newTeam.members);

  newTeam.add({ attack: 20 });
  expect(expected).toEqual(newTeam.members);

  try {
    newTeam.add(character1);
  } catch (error) {
    expect(ERROR_CHARACTER_EXISTS).toContain(error.message);
  }
});
