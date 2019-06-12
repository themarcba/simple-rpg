import Field from './Field';
import Hazard from '../Hazard';

export default class Water extends Field {
    constructor(coordX, coordY, attached) {
        super(coordX, coordY, attached);
        this.walkable = true;
    }

    static textureFile() {
        return 'water.png';
    }

    enterAction(player) {        
        if(!player.canSwim) {            
            let drowning = new Hazard('drowning', 100, 'drowned in water', 1);
            drowning.hurt(player);            
        }
    }

}
