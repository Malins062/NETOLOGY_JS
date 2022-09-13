const TYPES_CHARACTER = [
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

const ERRORS = {
  name: 'Ошибка! Допустимая длина: 2-10 символов.',
  type: 'Ошибка! Недопустимый тип персонажа.',
  levelup: 'Ошибка! Невозможно повысить уровень умершего персонажа.',
};

/*
    Класс Person (персонаж).
      Свойства:
        name - имя (допустимая длина: 2-10 символов);
        type - тип (допустимые значения:  TYPES_CHARACTER);
        health - уровень жизни;
        level - уровень персонажа;
        attack - атака;
        defence - защита.
*/
class Person {
  constructor(name, type, health, level, attack, defence) {
    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error(ERRORS.name);
    }
    this.name = name;

    if (TYPES_CHARACTER.indexOf(type) === -1) {
      throw new Error(ERRORS.type);
    }
    this.type = type;

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

export {
  Person as default, TYPES_CHARACTER, ERRORS,
};
