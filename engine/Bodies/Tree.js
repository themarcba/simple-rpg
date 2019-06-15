import Body from './Body';

export default class Tree extends Body {

    constructor() {
        super(['cut']);
        this.name = 'tree';
        this.description = `is good at blocking paths`;
        this.notWalkableReason = 'there is tree there.';
        this.damage = 0;
    }

    static textureFile() {
        return 'tree.png';
    }

    onAffected() {
        if(damage >= 100) {
            SystemLog.write('🌳 tree down');
        } else {
            SystemLog.write(`🌳 damage ${this.damage}%`);
        }
    }

}