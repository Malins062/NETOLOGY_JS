import Bowerman from '../bowerman';
import Team from '../team';
import Undead from '../undead';
import Zombie from '../zombie';

test.each([
  [
    [],
    [],
  ],
  [
    undefined,
    [],
  ],
  [
    52,
    [],
  ],
  [
    [new Bowerman('Лучник')],
    [new Bowerman('Лучник')],
  ],
  [
    [new Undead('Лучник'), new Zombie('Лучник')],
    [new Undead('Лучник'), new Zombie('Лучник')],
  ],
])(
  ('Create team, testing class Team...'),
  (params, expected) => {
    const testTeam = new Team(params);

    const allHeroes = [];
    let index = 0;
    for (const hero of testTeam) {
      allHeroes.push(hero);

      expect(expected[index]).toEqual(hero);
      index += 1;
    }

    expect(expected).toEqual(allHeroes);
  },
);
