import { Character } from '../app';
// import { Zombie } from '../classes/zombie';

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

  test('5_test check name length > 11', () => {
    expect(() => new Zombie('Nattttttttttttttttttt')).toThrow();
  });

  test('6_test check name = "string"', () => {
    expect(() => new Zombie(123)).toThrow();
  });

  test('7_test function levelUp', () => {
    const received = new Zombie('Nat');
    received.levelUp();
    const expected = 2;
    expect(received.level).toBe(expected);
  });

  test('8_test function damage', () => {
    const received = new Zombie('Mat');
    received.damage(20);
    const expected = 88;
    expect(received.health).toBe(expected);
  });
});
