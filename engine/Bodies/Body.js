import SystemLog from '../SystemLog';
import UIController from '../UIController';
import Affectable from '../Effects/Affectable';

export default class Body extends Affectable {
    constructor(affectableBy = [], notWalkableReason = null) {
        super(affectableBy);
        this.notWalkableReason = notWalkableReason;
    }
}