import Character from '../app';

class Swordsman extends Character {
    constructor(name, type = 'Swordsman') {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}
