
import Field from './Field';

export default class Grass extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
    }

    enterAction(player) {
        if(Math.random() > 0.5) { // probability to get stung by bug ~50%
            player.hurt(20, 'stung by bug');
        }
    }
}
