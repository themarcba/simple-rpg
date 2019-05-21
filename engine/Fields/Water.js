import Field from './Field';
import Drowning from '../Hazards/Drowning.js';

export default class Water extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
    }

    enterAction(player) {        
        if(!player.canSwim) {            
            let drowning = new Drowning();            
            drowning.hurt(player);            
        }
    }
}
