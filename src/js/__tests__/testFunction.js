import Character from '../app';

describe('test class Character', () => {
  class Zombie extends Character {
    constructor(name, type = 'Zombie', attack = 10, defence = 40) {
      super(name, type, attack, defence);
    }
  }

  // class Bowman extends Character {
  //   constructor(name, type = 'Bowman', attack = 25, defence = 25) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Swordsman extends Character {
  //   constructor(name, type = 'Swordsman', attack = 40, defence = 10) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Magician extends Character {
  //   constructor(name, type = 'Magician', attack = 10, defence = 40) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Undead extends Character {
  //   constructor(name, type = 'Undead', attack = 25, defence = 25) {
  //     super(name, type, attack, defence);
  //   }
  // }

  // class Daemon extends Character {
  //   constructor(name, type = 'Daemon', attack = 40, defence = 10) {
  //     super(name, type, attack, defence);
  //   }
  // }

  test('Class is defined', () => {
    expect(Character).toBeDefined();
  });

  test('test check name length > 1', () => {
    const received = new Zombie('Nat');
    const expected = 1;
    expect(received.name.length).toBeGreaterThan(expected);
  });

  test('test check name length < 11', () => {
    const received = new Zombie('Nat');
    const expected = 11;
    expect(received.name.length).toBeLessThan(expected);
  });

  test('test check name = "string"', () => {
    const received = new Zombie('Nat');
    const expected = 'string';
    expect(typeof received.name).toBe(expected);
  });

  test('test function levelUp', () => {
    const preReceived = new Zombie('Cat');
    preReceived.levelUp();
    const expected = 2;
    expect(preReceived.level).toBe(expected);
  });

  test('test function damage', () => {
    const received = new Zombie('Mat');
    received.damage(20);
    const expected = 88;
    expect(received.health).toBe(expected);
  });

  test('test function checkName', () => {
    const preReceived = new Zombie('P');
    const received = preReceived.checkName();
    const expected = 'Ошибка длины имени!';
    expect(received).toThrow(expected);
  });

  test('test function checkNameLength', () => {
    const preReceived = new Zombie('Pittttttttttttttttt');
    const received = preReceived.checkNameLength();
    const expected = 'Ошибка длины имени!';
    expect(received).toThrow(expected);
  });

  test('test function checkNameType', () => {
    const preReceived = new Zombie('12');
    const received = preReceived.checkNameType();
    const expected = 'Имя - не строка!';
    expect(received).toThrow(expected);
  });
});
