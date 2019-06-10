import SystemLog from '../SystemLog';

export default class Effect {
    constructor(prop, value, valueType) {
        this.prop = prop;
        this.value = value;
        this.valueType = valueType;
    }
}