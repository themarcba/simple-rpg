import SystemLog from '../SystemLog';

export default class Hazard {
    constructor() {}

    hurt(player) {
        if (Math.random() < this.probability) { // probability to get stung by bug ~50%
            player.hurt(this.damage, this.damageReason);
        }
    }
}