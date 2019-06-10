import Liquid from './Liquid';
import SystemLog from '../../SystemLog';
import Effect from '../../Effects/Effect';
import Action from '../../Effects/Action';
export default class HealthPotion extends Liquid {

    constructor() {
        super();
        this.name = 'health potion';
        this.description = `rises user's health by 50.`;
        this.actions = [
            new Action('drink',
                [
                    new Effect('health', 10),
                    new Effect('hydration', 30)
                ],
                () => {
                    SystemLog.write('the potion tastes really good 🤩');
                }
            ),
            new Action('smell',
                [new Effect('health', -5)],
                () => {
                    SystemLog.write('the potion smells awful 😷');
                }
            )  
        ];
    }
}