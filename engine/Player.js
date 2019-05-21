import SystemLog from './SystemLog';
import Map from './Map';

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
        
	}

	move (direction){

		if(this.health > 0) {

			if (this.currentField[direction] && this.currentField[direction].canMove) {
				this.currentField = this.currentField[direction];
				SystemLog.write(`moved ${direction}. now on field (${this.currentField.constructor.name})`);
				if (this.currentField.enterAction) {
					this.currentField.enterAction(this);
				}
			} else {
				if (this.currentField[direction] && !this.currentField[direction].canMove) {
					SystemLog.write(`can't move here. ${this.currentField[direction].cantMoveReason}`);
				} else {
					SystemLog.write(`can't move here. there is nothing there.`);
				}
			}

		} else {
			SystemLog.write(`${this.name} can't move. he passed out.`);
        }

        this.printPlayer();
	}

    printPlayer() {
        let canvas = document.getElementById('player');
        let ctx = document.getElementById('player').getContext("2d");
        canvas.width = 300;
        canvas.height = 300;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc((this.currentField.coordinates.x*100) + 50, (this.currentField.coordinates.y*100) + 50, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'tomato';
        ctx.fill();
    }

	hurt(damage, reason){

		this.health -= damage; // TODO : check if 0 and "die" if so :P

		SystemLog.write(`${reason} - health :${this.health}`);

	}

}