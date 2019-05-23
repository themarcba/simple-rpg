import SystemLog from './SystemLog';

export default class Hazard {
    constructor(name, damage, damageReason, probability) {
        this.name = name;
        this.damage = damage;
        this.damageReason = damageReason;
        this.probability = probability;
    }

    hurt(player) {
        if (Math.random() < this.probability) { // probability to get stung by bug ~50%
            player.hurt(this.damage, this.damageReason);
        }
    }
}