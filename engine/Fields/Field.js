import SystemLog from '../SystemLog';

export default class Field {
    constructor(coordX, coordY) {
        this.coordinates = {
            x: coordX,
            y: coordY
        };
        // SystemLog.write(`✨ new ${this.constructor.name} created at (${this.coordinates.x}, ${this.coordinates.y})`);
    }
}