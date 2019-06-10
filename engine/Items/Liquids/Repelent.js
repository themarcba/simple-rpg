import Liquid from './Liquid';
import SystemLog from '../../SystemLog';

export default class Repelent extends Liquid {

    constructor() {
        super();
        this.name = 'repelent';
        this.description = `protects against bugs for 10 steps`;
    }

    // adds 50 health to player
    applyDrink(player) {
        SystemLog.write(`🧪 ${player.name} drank a health potion`);
        player.heal(50);
    }

}