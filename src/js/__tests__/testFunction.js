import { Character } from '../app';

describe('1_test class Character', () => {
  class Zombie extends Character {};

  test('2_Class is defined', () => {
    expect(Character).toBeDefined();
  });

  test('3_class Zombie is defined', () => {
      expect(Zombie).toBeDefined();
  });

  test('4_test check name length > 1', () => {
    const received = new Zombie('Nat');
    const expected = 1;
    expect(received.name.length).toBeGreaterThan(expected);
  });

  test('5_test check name length > 1', () => {
    const my = new Zombie('N');
    function received() {
      if (my.name.length < 2 || my.name.length > 10) throw new Error ('Ошибка длины имени!');
    } 
    const expected = 'Error';
    expect(received).toThrow(expected);
  });

  test('6_test check name = "string"', () => {
    const you = new Zombie(123);
    function received () {
      if (typeof you.name !== 'string') throw new TypeError('Имя - не строка!');
    }

    const expected = 'Error';
    expect(received).toThrow(expected);
  });

  test('7_test function levelUp', () => {
    const preReceived = new Zombie('Nat');
    preReceived.levelUp();
    const expected = 2;
    expect(preReceived.level).toBe(expected);
  });

  test('8_test function damage', () => {
    const received = new Zombie('Mat');
    received.damage(20);
    const expected = 88;
    expect(received.health).toBe(expected);
  });
});
