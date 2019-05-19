class Field {
    constructor(coordX, coordY) {
        this.coordinates = {
            x: coordX,
            y: coordY
        };
        console.log(`new ${this.constructor.name} created at (${this.coordinates.x}, ${this.coordinates.y})`);
    }
}

class Road extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
    }
}

class Grass extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = true;
    }

    enterAction(player) {
        if(Math.random() > 0.5) { // probability to get stung by bug ~50%
            player.hurt(20, 'stung by bug');
        }
    }
}

class Wall extends Field {
    constructor(coordX, coordY) {
        super(coordX, coordY);
        this.canMove = false;
        this.cantMoveReason = `Can't move here. This is a wall.`;
    }
}
