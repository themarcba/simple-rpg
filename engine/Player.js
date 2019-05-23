import SystemLog from './SystemLog';
import Map from './Map';
import UIController from './UIController';
import { setTimeout } from 'timers';
import HealthPotion from './Items/Liquids/HealthPotion';
import DeathPotion from './Items/Liquids/DeathPotion';

export default class Player {

	/**
	 *
	 * @param name
	 * @param {Map} map
	 */
	constructor(name, map){
        window._player = this;
		this.name = name;
		this.health = 100;
		this.map = map;
		this.currentField = map.spawnPoint;
        this.canSwim = false;
        this.isControlDisabled = false;
        this.backpack = {
            liquids: [new HealthPotion(), new DeathPotion(), new HealthPotion()],
            weapons: [],
            miscellaneous: []
        };
        this.map.moveMap(this.currentField.coordinates);

        UIController.buildBackpackView(this);
	}

	move (direction){

		if(this.health > 0) {

			if (this.currentField[direction] && this.currentField[direction].canMove) {
                UIController.showWalkingAnimation(this, direction);
                this.currentField = this.currentField[direction];
				SystemLog.write(`🚶🏼‍moved ${direction}. now on ${this.currentField.constructor.name.toLowerCase()}.`);
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

        UIController.updateHealth(this.health);

        if(this.health == 0) {
            UIController.showGameOver();
        }
		SystemLog.write(`💥 ${this.name} got hurt (${reason})`);
    }

    heal(health) {
        (this.health + health) > 100 ? this.health = 100 : this.health += health;
        SystemLog.write(`❤️ ${this.name}'s health rose to ${this.health}`);
        UIController.updateHealth(this.health);
    }

    drink(liquid) {
        liquid.applyDrink(this);

        // removes liquid after player drank it
        this.backpack.liquids = this.backpack.liquids.filter(item => item !== liquid);
    }

    addToBackpack(item) {

    }
    
    canMove() {
        return (this.health > 0) && !this.isControlDisabled;
    }
}