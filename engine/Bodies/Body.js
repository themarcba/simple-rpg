import SystemLog from '../SystemLog';
import UIController from '../UIController';
import Affectable from '../Effects/Affectable';

export default class Field extends Affectable {
    constructor(affectableBy = [], walkable = false) {
        super(affectableBy);
        this.walkable = walkable;
    }
}