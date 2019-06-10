import Liquid from './Liquid';
import SystemLog from '../../SystemLog';
import Effect from '../../Effects/Effect';
import Action from '../../Effects/Action';
export default class SwimPotion extends Liquid {

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