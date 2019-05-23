import Liquid from './Liquid';
import SystemLog from '../../SystemLog';

export default class HealthPotion extends Liquid {

    constructor() {
        super();
        this.name = 'death potion';
        this.description = `kills user immediately.`;
    }

    // adds 50 health to player
    applyDrink(player) {
        SystemLog.write(`🧪 ${player.name} drank a death potion`);
        player.hurt(100, 'poison');
    }

}