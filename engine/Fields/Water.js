import Field from './Field';

export default class Water extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
    }

    enterAction(player) {
        if(!player.canSwim) {
            player.hurt(100, `can't swim.`);
        }
    }
}
