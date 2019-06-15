import SystemLog from '../SystemLog';
import UIController from '../UIController';
import Affectable from '../Effects/Affectable';

export default class Field extends Affectable {
    constructor(coordX, coordY, attached = {
        item: null,
        body: null
    }) {
        super([]);
        this.coordinates = {
            x: coordX,
            y: coordY
        };

        this.attached = attached;

        // SystemLog.write(`✨ new ${this.constructor.name} created at (${this.coordinates.x}, ${this.coordinates.y})`, {
        //     displayToUser: false,
        //     addToHistory: false
        // });
    }
    
    isWalkable() {
        return !this.notWalkableReason && ((this.attached.body && !this.attached.body.notWalkableReason) || !this.attached.body);
    }

    getNotWalkableReason() {
        return (this.attached.body && this.attached.body.notWalkableReason) ? this.attached.body.notWalkableReason : this.notWalkableReason;
    }

    draw() {
        UIController.drawFieldToMap(this.coordinates.x, this.coordinates.y, this);
    }
}