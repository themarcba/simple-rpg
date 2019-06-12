import Body from './Body';

export default class Tree extends Body {

    constructor() {
        super(['cut']);
        this.name = 'tree';
        this.description = `is good at blocking paths`;
        this.notWalkableReason = 'there is tree there.';
    }

    static textureFile() {
        return 'tree.png';
    }

}