import SystemLog from '../SystemLog';
import Effect from './Effect';

export default class EffectAction {
    constructor(name, effects, callback) {
        this.name = name;
        this.effects = effects;
        this.callback = callback;
    }
}