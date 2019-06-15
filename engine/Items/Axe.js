import SystemLog from '../SystemLog';
import Effect from '../Effects/Effect';
import Action from '../Effects/Action';
import Item from './Item';

export default class Axe extends Item {

    constructor() {
        super();
        this.name = 'axe';
        this.description = `is good at cutting things down`;
        this.actions = [
            new Action('cut',
                [new Effect('damage', 100)],
                () => {
                    SystemLog.write('💪 look ma\'! i\'m a lumberjack.');
                }
            )
        ];
    }
}