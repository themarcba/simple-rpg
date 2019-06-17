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
        if(this.attached.body) this.attached.body.field = this;
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

    enter(player) {
        let addedItem = this.attached.item;
        if(addedItem) {
            player.addToBackpack(addedItem);
            this.attached.item = null;
            setTimeout(() => {
                this.draw();
                SystemLog.write(`🎒 added ${addedItem.name} to the backpack`, {
                    displayToDialog: true
                });    
            }, 1000);
        }
        UIController.buildBackpackView(player);
        if (this.enterFn) this.enterFn(player);
    }
}