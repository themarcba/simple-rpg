import SystemLog from '../SystemLog';
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
        if(this.damage >= 100) {
            SystemLog.write('🌳 tree chopped down', {
                displayToDialog: true
            });
            this.field.attached.body = null;
            this.field.draw();
        } else {
            SystemLog.write(`🌳 damage on tree ${this.damage}%`, {
                displayToDialog: true
            });
        }
    }

}