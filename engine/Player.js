import SystemLog from './SystemLog';
import Map from './Map';
import UIController from './UIController';
import { setTimeout } from 'timers';

export default class Player {

	/**
	 *
	 * @param name
	 * @param {Map} map
	 */
	constructor(name, map){
		this.name = name;
		this.health = 100;
		this.map = map;
		this.currentField = map.spawnPoint;
        this.canSwim = false;
        this.isControlDisabled = false;
        this.map.moveMap(this.currentField.coordinates);
	}

	move (direction){

		if(this.health > 0) {

			if (this.currentField[direction] && this.currentField[direction].canMove) {
                UIController.showWalkingAnimation(this, direction);
                this.currentField = this.currentField[direction];
				SystemLog.write(`🚶🏼‍moved ${direction}. now on field (${this.currentField.constructor.name})`);
				if (this.currentField.enterAction) {
					this.currentField.enterAction(this);
				}
			} else {
				if (this.currentField[direction] && !this.currentField[direction].canMove) {
					SystemLog.write(`🚫 can't move here. ${this.currentField[direction].cantMoveReason}`);
				} else {
					SystemLog.write(`🚫 can't move here. there is nothing there.`);
				}
			}

		} else {
			SystemLog.write(`😵 ${this.name} can't move. he passed out.`);
        }

        this.map.moveMap(this.currentField.coordinates);
	}

	hurt(damage, reason){
        this.health > damage ? this.health -= damage : this.health = 0;
        if(this.health == 0) {
            UIController.showGameOver();
        }
		SystemLog.write(`💥 ouch! ${this.name} got hurt (${reason}) - health :${this.health}%`);
    }
    
    canMove() {
        return (this.health > 0) && !this.isControlDisabled;
    }

}