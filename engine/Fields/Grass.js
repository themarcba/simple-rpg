import SystemLog from '../SystemLog';
import Field from './Field';
import Effect from '../Effects/Effect';
import Action from '../Effects/Action';

export default class Grass extends Field {
    constructor(coordX, coordY, attached) {
        super(coordX, coordY, attached);
    }

    static textureFile() {
        return 'grass.png';
    }

    enterAction(player) {
        let sting = new Action('sting',
            [new Effect('health', -15)],
            () => {
                SystemLog.write(`🐞 ${player.name} got stung by a bug`);
            }
        );

        let probability = 0.5;
        if(Math.random() <= probability) player.process(sting);
    }
}