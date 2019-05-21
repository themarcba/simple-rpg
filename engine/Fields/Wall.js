import Field from './Field';

export default class Wall extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = false;
        this.cantMoveReason = `this is a wall.`;
    }
}