const TYPES_CHARACTER = [
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

const ERROR_NAME = 'Ошибка! Допустимая длина: 2-10 символов.';
const ERROR_TYPE = 'Ошибка! Недопустимый тип персонажа.';

/*
    Класс Character (персонаж).
    Свойства,класса Character:
        name - имя (допустимая длина: 2-10 символов);
        type - тип (допустимые значения:  TYPES_CHARACTER);
        health - уровень жизни;
        level - уровень персонажа;
        attack - атака;
        defence - защита;
*/
class Character {
  constructor(name, type, health, level, attack, defence) {
    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error(ERROR_NAME);
    }
    this.name = name;

    if (TYPES_CHARACTER.indexOf(type) === -1) {
      throw new Error(ERROR_TYPE);
    }
    this.type = type;

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}

export {
  Character as default, TYPES_CHARACTER, ERROR_NAME, ERROR_TYPE,
};
