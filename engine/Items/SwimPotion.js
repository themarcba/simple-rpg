import SystemLog from '../SystemLog';
import Effect from '../Effects/Effect';
import Action from '../Effects/Action';
import Item from './Item';

export default class SwimPotion extends Item {

    constructor() {
        super();
        this.name = 'swim potion';
        this.description = `gives user the ability to swim`;
        this.actions = [
            new Action('drink',
                [
                    new Effect('canSwim', true)
                ],
                () => {
                    SystemLog.write('i feel like taking a swim 🏊‍');
                }
            ),
        ];
    }
}