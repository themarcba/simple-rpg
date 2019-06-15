import Field from './Field';

export default class Road extends Field {

    constructor(coordX, coordY, attached) {
        super(coordX, coordY, attached);
    }

    static textureFile() {
        return 'road.png';
    }

}