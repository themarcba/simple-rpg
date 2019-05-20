import Field from './Field';

export default class Road extends Field {

    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
    }

}