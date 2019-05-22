import SystemLog from './SystemLog';
import Map from './Map';
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
        this.map.moveMap(this.currentField.coordinates);
	}

	move (direction){

		if(this.health > 0) {

			if (this.currentField[direction] && this.currentField[direction].canMove) {
                this.currentField = this.currentField[direction];
                this.stylePlayerOnMap(direction);
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
		SystemLog.write(`💥 ouch! ${this.name} got hurt (${reason}) - health :${this.health}%`);
    }
    
    stylePlayerOnMap(direction) {
        document.getElementById('player').className = `walk walking ${direction}`;
        setTimeout(() => {
            document.getElementById('player').classList.remove('walking');
        }, 1000);
    }

}