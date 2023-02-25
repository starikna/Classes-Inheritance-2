import Character from '../app';

class Daemon extends Character {
    constructor(name, type = 'Daemon') {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}