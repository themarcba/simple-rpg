import SystemLog from './SystemLog';

export default class Weapon {
    constructor(name, attackPoints, functions) {
        this.name = name;
        this.attackPoints = attackPoints;
        this.functions = functions;
    }
}