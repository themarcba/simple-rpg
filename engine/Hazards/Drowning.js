import Hazards from './Hazard.js';

export default class Drowning extends Hazards {
    constructor() {
        super();
        this.name = 'water';
        this.damage = 100;
        this.damageReason = 'drowning';
        this.probability = 1;
    }
}