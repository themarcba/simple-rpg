
import Field from './Field';
import Bug from '../Hazards/Bug.js';

export default class Grass extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
    }

    enterAction(player) {
        let bug = new Bug();
        bug.hurt(player);
    }
}
