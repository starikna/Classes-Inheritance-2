import Character  from '../app';
import Zombie from '../classes/zombie';
import Bowerman from '../classes/bowerman';
import Daemon from '../classes/daemon';
import Magician from '../classes/magician';
import Swordsman from '../classes/swordsman';
import Undead from '../classes/undead';

describe('test class Character', () => {
  test('1_Class is defined', () => {
    expect(Character).toBeDefined();
  });  

  test('2_test check type === "string"', () => {
    expect(() => new Zombie('Nat', 321)).toThrow();
  });

  test('3_test check name length > 11', () => {
    expect(() => new Zombie('Nattttttttttttttttttt')).toThrow();
  });

  test('4_test check name = "string"', () => {
    expect(() => new Zombie(123)).toThrow();
  });

  test('5_test function levelUp', () => {
    const received = new Zombie('Nat');
    received.levelUp();
    const expected = 2;
    expect(received.level).toBe(expected);
  });

  test('6_test function damage', () => {
    const received = new Zombie('Mat');
    received.damage(20);
    const expected = 88;
    expect(received.health).toBe(expected);
  });
});

describe('test class Bowerman', () => {
  test('7_test check type === "string"', () => {
    expect(() => new Bowerman('Nat', 321)).toThrow();
  });

  test('8_test check name length > 11', () => {
    expect(() => new Bowerman('Nattttttttttttttttttt')).toThrow();
  });

  test('9_test check name = "string"', () => {
    expect(() => new Bowerman(123)).toThrow();
  });


  test('10_test function levelUp', () => {
  const received = new Bowerman('Nat');
  received.levelUp();
  const expected = 2;
  expect(received.level).toBe(expected);
  });

  test('11_test function damage', () => {
  const received = new Bowerman('Mat');
  received.damage(10);
  const expected = 92.5;
  expect(received.health).toBe(expected);
  });
});

describe('test class Daemon', () => {
  test('12_test check type === "string"', () => {
    expect(() => new Daemon('Nat', 321)).toThrow();
  });
  
  test('13_test check name length > 11', () => {
    expect(() => new Daemon('Nattttttttttttttttttt')).toThrow();
  });
  
  test('14_test check name = "string"', () => {
    expect(() => new Daemon(123)).toThrow();
  });
    
  test('15_test function levelUp', () => {
    const received = new Daemon('Nat');
    received.levelUp();
    const expected = 2;
    expect(received.level).toBe(expected);
  });
  
  test('16_test function damage', () => {
    const received = new Daemon('Mat');
    received.damage(30);
    const expected = 73;
    expect(received.health).toBe(expected);
  });
});

describe('test class Magician', () => {
  test('17_test check type === "string"', () => {
    expect(() => new Magician('Nat', 321)).toThrow();
  });
    
  test('18_test check name length > 11', () => {
    expect(() => new Magician('Nattttttttttttttttttt')).toThrow();
  });
    
  test('19_test check name = "string"', () => {
    expect(() => new Magician(123)).toThrow();
  });
        
  test('20_test function levelUp', () => {
    const received = new Magician('Nat');
    received.levelUp();
    const expected = 2;
    expect(received.level).toBe(expected);
  });
    
  test('21_test function damage', () => {
    const received = new Magician('Mat');
    received.damage(40);
    const expected = 76;
    expect(received.health).toBe(expected);
  });
});

describe('test class Swordsman', () => {
  test('22_test check type === "string"', () => {
    expect(() => new Swordsman('Nat', 321)).toThrow();
  });
      
  test('23_test check name length > 11', () => {
    expect(() => new Swordsman('Nattttttttttttttttttt')).toThrow();
  });
      
  test('24_test check name = "string"', () => {
    expect(() => new Swordsman(123)).toThrow();
  });
      
  test('25_test function levelUp', () => {
    const received = new Swordsman('Nat');
    received.levelUp();
    const expected = 2;
    expect(received.level).toBe(expected);
  });
      
  test('26_test function damage', () => {
    const received = new Swordsman('Mat');
    received.damage(20);
    const expected = 82;
    expect(received.health).toBe(expected);
  });
});

describe('test class Undead', () => {
  test('27_test check type === "string"', () => {
    expect(() => new Undead('Nat', 321)).toThrow();
  });
        
  test('28_test check name length > 11', () => {
    expect(() => new Undead('Nattttttttttttttttttt')).toThrow();
  });
        
  test('29_test check name = "string"', () => {
    expect(() => new Undead(123)).toThrow();
  });
          
  test('30_test function levelUp', () => {
    const received = new Undead('Nat');
    received.levelUp();
    const expected = 2;
    expect(received.level).toBe(expected);
  });
        
  test('31_test function damage', () => {
    const received = new Undead('Mat');
    received.damage(20);
    const expected = 85;
    expect(received.health).toBe(expected);
  });
});
