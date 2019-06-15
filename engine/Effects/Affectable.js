import SystemLog from '../SystemLog';

export default class Affectable {
    constructor(affectableBy) {
        this.affectableBy = affectableBy;
    }

    processAction(target, actionName) {
        let action = target.actions.filter(action => action.name == actionName)[0];
        return this.process(action);
    }

    process(action) {
        if(this.affectableBy.includes(action.name)) {
            action.effects.forEach(effect => {
                this.applyEffect(effect);
            });
            
            if(this.onAffected) this.onAffected();
            if(action.callback) action.callback();
            return true;
        } else {
            SystemLog.write(`🤷‍ NOT affectable by ${action.name}`);
            return false;
        }
    }

    applyEffect(effect) {
        if(this.hasOwnProperty(effect.prop)) {
            switch (typeof effect.value) {
                case 'number':
                    let newNumber =  + this[effect.prop] + effect.value;
                    if(newNumber < 0)  newNumber = 0;
                    else if(newNumber > 100) newNumber = 100;

                    this[effect.prop] = newNumber;
                    break;
                case 'boolean':
                    this[effect.prop] = effect.value;
                    break;
                default:
                    console.error(`effect ${effect.name} has an invalid value type`);
                    break;
            }
            SystemLog.write(`👉 changed ${effect.prop} to ${this[effect.prop]}`);    
        } else {
            SystemLog.write(`🤷‍ doesn't have property ${effect.prop}`);
        }
    }

}