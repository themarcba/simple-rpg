import SystemLog from './SystemLog';
import Map from './Map';
import UIController from './UIController';
import Affectable from './Effects/Affectable';
import Axe from './Items/Axe';
import HealthPotion from './Items/HealthPotion';

export default class Player extends Affectable {

    /**
     *
     * @param name
     * @param {Map} map
     */
    constructor(name, map) {
        super(['drink', 'smell', 'eat', 'sting', 'drown']); // can be affected by...
        window._player = this;
        this.name = name;
        this.health = 100;
        this.currentDirection = 'north';
        this.sad = false;
        this.map = map;
        this.currentField = map.spawnPoint;
        this.canSwim = false;
        this.isControlDisabled = false;
        this.backpack = [new Axe(), new HealthPotion()];
        // this.backpack.push(new Item('Walk-on-Water Burger', 'gives the user immediate ability to walk on water',
        //     [new Action('eat',
        //         [new Effect('canSwim', true)]
        //     )],
        //     () => {
        //         SystemLog('🍔 wow, this burger is amazing!');
        //     },
        //     false
        // ));

        this.map.moveMap(this.currentField.coordinates);

        UIController.buildBackpackView(this, 'liquids');
    }

    onAffected() {
        UIController.updateHealth(this.health);
        if (this.health == 0) {
            UIController.showGameOver();
        }
    }

    move(direction) {
        this.currentDirection = direction;
        if (this.health > 0) {

            if (this.currentField[direction] && this.currentField[direction].isWalkable()) {
                UIController.showWalkingAnimation(this, direction);
                this.currentField = this.currentField[direction];
                SystemLog.write(`🚶🏼‍moved ${direction}. now on ${this.currentField.constructor.name.toLowerCase()}.`);
                this.currentField.enter(this);
            } else {
                UIController.turnPlayerInDirection(this, direction);
                if (this.currentField[direction] && !this.currentField[direction].isWalkable()) {
                    SystemLog.write(`🚫 can't move here. ${this.currentField[direction].getNotWalkableReason()}`, {
                        displayToDialog: true
                    });
                } else {
                    SystemLog.write(`🚫 can't move here. there is nothing there.`, {
                        displayToDialog: true
                    });
                }
            }

        } else {
            SystemLog.write(`😵 ${this.name} can't move. he passed out.`, {
                displayToDialog: true
            });
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

    addToBackpack(item) {
        this.backpack.push(item);
    }

    removeFromBackpack(itemToRemove) {
        this.backpack = this.backpack.filter(item => item !== itemToRemove);
    }

    canMove() {
        return (this.health > 0) && !this.isControlDisabled;
    }

    processAction(item, actionName) {
        let action = item.actions.filter(action => action.name == actionName)[0];
        let target = this;
        
        if(action.name == 'cut' && this.currentField[this.currentDirection] && this.currentField[this.currentDirection].attached.body) {
            target = this.currentField[this.currentDirection].attached.body;
        }
        
        return target.process(action);
    }
}