
import Field from './Field';
import Hazard from '../Hazard';

export default class Grass extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
        this.textureFile = 'grass.png';
    }

    enterAction(player) {
        let bug = new Hazard('bug', 15, 'stung by bug', 0.5);
        bug.hurt(player);
    }
}
