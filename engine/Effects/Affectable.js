import SystemLog from '../SystemLog';

export default class Affectable {
    constructor(affectableBy) {
        this.affectableBy = affectableBy;
    }

    process(target, actionName) {
        let action = target.actions.filter(action => action.name == actionName)[0];
        if(this.affectableBy.includes(actionName)) {
            action.effects.forEach(effect => {
                this.applyEffect(effect);
            });
    
            if(action.callback) action.callback();
            return true;
        } else {
            return false;
        }
    }

    applyEffect(effect) {
        if(this.hasOwnProperty(effect.prop)) {
            switch (typeof effect.value) {
                case 'number':
                    let newNumber = this[effect.prop] + effect.value;
                    this[effect.prop] = newNumber < 100 ? newNumber : 100;
                    break;
                case 'boolean':
                    this[effect.prop] = effect.value;
                    break;
                default:
                    console.error(`effect ${effect.name} has an invalid value type`);
                    break;
            }
            console.log(`changed ${effect.prop} to ${this[effect.prop]}`);    

        }
    }

}