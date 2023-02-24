export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.level = level;

    this.checkNameLength = function () {
      if (this.name.length < 2 || this.name.length > 10) {
        throw new Error('Ошибка длины имени!');
      }
    };

    this.checkNameType = function () {
      if (typeof this.name !== 'string') {
        throw new Error('Имя - не строка!');
      }
    };

    this.levelUp = function () {
      if (this.health) {
        this.level += 1;

        this.attack += (this.attack * 20) / 100;
        this.defence += (this.defence * 20) / 100;

        this.health = 100;
      }
    };

    this.damage = function (points) {
      if (this.health >= 0) {
        this.health -= points * (1 - this.defence / 100);
      }
    };
  }
}
