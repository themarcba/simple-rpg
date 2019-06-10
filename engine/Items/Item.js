import SystemLog from '../SystemLog';

export default class Item {
    constructor(name, description, actions, oneTimeUse) {
        this.name = name;
        this.description = description;
        this.actions = actions || [];
        this.oneTimeUse = oneTimeUse || true;
    }
}