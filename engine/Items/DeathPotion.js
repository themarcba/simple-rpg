import SystemLog from '../SystemLog';
import Effect from '../Effects/Effect';
import Action from '../Effects/Action';
import Item from './Item';

export default class DeathPotion extends Item {

    constructor() {
        super();
        this.name = 'death potion';
        this.description = `kills user immediately.`;
        this.actions = [
            new Action('drink',
                [new Effect('health', -100)],
                () => {
                    SystemLog.write('ugh. something is wrong with this drink...');
                }
            )
        ];

    }

}