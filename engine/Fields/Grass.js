import SystemLog from '../SystemLog';
import Field from './Field';
import Effect from '../Effects/Effect';
import Action from '../Effects/Action';
import UIController from '../UIController';

export default class Grass extends Field {
    constructor(coordX, coordY, attached) {
        super(coordX, coordY, attached);
        this.enterFn = (player) => {
            let bugStingProbability = 0.3;
            let bugSting = new Action('sting',
                [new Effect('health', -15)],
                () => {
                    SystemLog.write(`🐞 ${player.name} got stung by a bug`, {
                        displayToDialog: true
                    });
                }
            );
            if (Math.random() <= bugStingProbability) player.process(bugSting);

            let killerBeeProbability = 0.05;
            let killerBee = new Action('sting',
                [new Effect('health', -80)],
                () => {
                    SystemLog.write(`🐝 ${player.name} got stung by a killer bee.`, {
                        displayToDialog: true
                    });
                }
            );
            if (Math.random() <= killerBeeProbability) player.process(killerBee);

        }
    }

    static textureFile() {
        return 'grass.png';
    }
}