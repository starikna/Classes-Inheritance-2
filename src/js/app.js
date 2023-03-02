export class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка длины имени!');
    }

    if (typeof name !== 'string') { 
      throw new TypeError('Имя - не строка!');
    }

    if (typeof type !== 'string') { 
      throw new TypeError('Имя - не строка!');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1; 
  }

  levelUp () {
    if (this.health) {
      this.level += 1;

      this.attack += (this.attack * 20) / 100;
      this.defence += (this.defence * 20) / 100;

      this.health = 100;
    }
  }

  damage (points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  };
}
