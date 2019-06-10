import SystemLog from './SystemLog';
import Map from './Map';
import UIController from './UIController';
import {
    setTimeout
} from 'timers';
import HealthPotion from './Items/HealthPotion';
import DeathPotion from './Items/DeathPotion';
import Affectable from './Effects/Affectable';
import Item from './Items/Item';
import Effect from './Effects/Effect';
import Action from './Effects/Action';

export default class Player extends Affectable {

    /**
     *
     * @param name
     * @param {Map} map
     */
    constructor(name, map) {
        super(['drink', 'smell', 'eat']); // can be affected by...
        window._player = this;
        this.name = name;
        this.health = 100;
        this.hydration = 50;
        this.sad = false;
        this.map = map;
        this.currentField = map.spawnPoint;
        this.canSwim = false;
        this.isControlDisabled = false;
        this.backpack = [new HealthPotion(), new DeathPotion()];
        this.backpack.push(new Item('Walk-on-Water Burger', 'gives the user immediate ability to walk on water',
            [new Action('eat',
                [new Effect('canSwim', true)]
            )],
            () => {
                SystemLog('🍔 wow, this burger is amazing!');
            },
            false
        ));

        this.map.moveMap(this.currentField.coordinates);

        UIController.buildBackpackView(this, 'liquids');



    }

    propertiesUpdated() {
        UIController.updateHealth(this.health);
    }

    move(direction) {

        if (this.health > 0) {

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

    hurt(damage, reason) {
        this.health > damage ? this.health -= damage : this.health = 0;

        UIController.updateHealth(this.health);

        if (this.health == 0) {
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

    addToBackpack(item, itemType) {
        this.backpack[itemType].push(item);
    }

    removeFromBackpack(itemToRemove, itemType) {
        this.backpack = this.backpack.filter(item => item !== itemToRemove);
    }

    canMove() {
        return (this.health > 0) && !this.isControlDisabled;
    }
}