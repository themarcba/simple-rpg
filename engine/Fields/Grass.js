import Field from './Field';
import Hazard from '../Hazard';

export default class Grass extends Field {
    constructor(coordX, coordY, attached) {
        super(coordX, coordY, attached);
        this.walkable = true;
    }

    static textureFile() {
        return 'grass.png';
    }

    enterAction(player) {
        let bug = new Hazard('bug', 15, 'stung by bug', 0.5);
        bug.hurt(player);
    }
}
