import SystemLog from '../SystemLog';
import UIController from '../UIController';

export default class Field {
    constructor(coordX, coordY) {
        this.coordinates = {
            x: coordX,
            y: coordY
        };
        SystemLog.write(`✨ new ${this.constructor.name} created at (${this.coordinates.x}, ${this.coordinates.y})`, {
            displayToUser: false,
            addToHistory: false
        });
    }

    draw() {
        UIController.drawFieldToMap(this.coordinates.x, this.coordinates.y, this.textureFile);
    }
}