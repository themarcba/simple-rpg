import SystemLog from '../SystemLog';
import Effect from '../Effects/Effect';
import Action from '../Effects/Action';
import Item from './Item';

export default class HealthPotion extends Item {

    constructor() {
        super();
        this.name = 'health potion';
        this.description = `rises user's health by 50.`;

        this.actions = [
            new Action('drink',
                [
                    new Effect('health', 50),
                    new Effect('hydration', 30)
                ],
                () => {
                    SystemLog.write('the potion tastes really good 🤩', {
                        displayToDialog: true
                    });
                }
            ),
            new Action('smell',
                [new Effect('health', -5)],
                () => {
                    SystemLog.write('the potion smells awful 😷', {
                        displayToDialog: true
                    });
                }
            )  
        ];
    }

    static textureFile() {
        return 'health_potion.png';
    }
}