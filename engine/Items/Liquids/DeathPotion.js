import Liquid from './Liquid';
import SystemLog from '../../SystemLog';
import Effect from '../../Effects/Effect';
import Action from '../../Effects/Action';

export default class HealthPotion extends Liquid {

    constructor() {
        super();
        this.name = 'death potion';
        this.description = `kills user immediately.`;
        this.actions = [
            new Action('drink',
                [
                    new Effect('health', -100)
                ],
                () => {
                    SystemLog.write('ugh. something\'s wrong with this drink...');
                }
            )
        ];

    }

}