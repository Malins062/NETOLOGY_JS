export const TYPES_CHARACTER = [
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

/*
    Класс Character (персонаж).
    Свойства,класса Character:
        name - имя (допустимая длина - 2-20 символов);
        type - тип (допустимые значения:  TYPES_CHARACTER);
        health - уровень жизни;
        level - уровень персонажа;
        attack - атака;
        defence - защита;
*/
export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error(`Ошибка! Персонаж ${name}: длина имени 2-10 символов.`);
    }
    this.name = name;

    if (!(type in TYPES_CHARACTER)) {
      throw new Error(`Ошибка! Тип пероснажа ${type}: допустимые значения ${TYPES_CHARACTER}.`);
    }
    this.type = type;

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
}
