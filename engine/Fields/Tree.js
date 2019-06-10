import Field from './Field';

export default class Tree extends Field {

    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = false;
        this.cantMoveReason = 'there is a tree in the way.'
    }

    static textureFile() {
        return 'tree.png';
    }

}