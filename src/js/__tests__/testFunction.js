import { Character } from '../app';
import { Zombie } from '../classes/zombie';

describe('1_test class Character', () => {
  class Zombie extends Character {};
  
  test('2_Class is defined', () => {
    expect(Character).toBeDefined();
  });  

  test('3_test check type === "string"', () => {
    expect(() => new Zombie('Nat', 321)).toThrow();
  });

  test('4_test check name length > 11', () => {
    expect(() => new Zombie('Nattttttttttttttttttt')).toThrow();
  });

  test('5_test check name = "string"', () => {
    expect(() => new Zombie(123)).toThrow();
  });
});

describe('1_test class Zombie', () => {

test('6_test function levelUp', () => {
  const received = new Zombie('Nat');
  received.levelUp();
  const expected = 2;
  expect(received.level).toBe(expected);
});

test('7_test function damage', () => {
  const received = new Zombie('Mat');
  received.damage(20);
  const expected = 88;
  expect(received.health).toBe(expected);
});
});