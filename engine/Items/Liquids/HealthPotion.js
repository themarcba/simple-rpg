import Liquid from './Liquid';
import SystemLog from '../../SystemLog';

export default class HealthPotion extends Liquid {

    constructor() {
        super();
        this.name = 'health potion';
        this.description = `rises user's health by 50.`;
    }

    // adds 50 health to player
    applyDrink(player) {
        SystemLog.write(`🧪 ${player.name} drank a health potion`);
        player.heal(50);
    }

}