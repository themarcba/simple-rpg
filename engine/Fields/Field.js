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

    enterAction(player) {
        if(this.attached.item) {
            player.addToBackpack(this.attached.item);
            this.attached.item = null;
            setTimeout(() => {
                this.draw();
            }, 1000);
        }
        UIController.buildBackpackView(player);
    }
}