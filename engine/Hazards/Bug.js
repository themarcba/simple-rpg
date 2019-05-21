import Hazards from './Hazard.js';

export default class Bug extends Hazards {
    constructor() {
        super();
        this.name = 'bug';
        this.damage = 20;
        this.damageReason = 'stong by bog';
        this.probability = 0.5;
    }
}