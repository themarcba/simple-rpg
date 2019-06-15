import SystemLog from '../SystemLog';
import Field from './Field';
import Effect from '../Effects/Effect';
import Action from '../Effects/Action';

export default class Water extends Field {
    constructor(coordX, coordY, attached) {
        super(coordX, coordY, attached);
        this.enterFn = (player) => {
            if (!player.canSwim) {
                let drown = new Action('drown',
                    [new Effect('health', -100, 1)],
                    () => {
                        SystemLog.write(`💀 ${player.name} drowned`);
                    }
                );
                player.process(drown);
            }    
        };
    }

    static textureFile() {
        return 'water.png';
    }
}