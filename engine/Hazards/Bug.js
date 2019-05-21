import Hazards from './Hazard.js';

export default class Bug extends Hazards {
    constructor() {
        super();
        this.name = 'bug';
        this.damage = 20;
        this.damageReason = 'stung by bug';
        this.probability = 0.5;
    }
}