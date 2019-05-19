class Player {
	constructor(name, map){
		this.name = name.toUpperCase();
		this.health = 100;
		this.map = map;
		this.currentField = map.spawnPoint;
	}

	move(direction){
		if(this.health > 0) {
			if (this.currentField[direction] && this.currentField[direction].canMove) {
				this.currentField = this.currentField[direction];
				GameSystem.log(`moved ${direction}. now on field ${this.currentField.id} (${this.currentField.constructor.name})`);
				if(this.currentField.enterAction) {
					this.currentField.enterAction(this);
				}
			} else {
				if (this.currentField[direction] && !this.currentField[direction].canMove) {
					GameSystem.log(`can't move here. ${this.currentField[direction].cantMoveReason}`);
				} else {
					GameSystem.log(`can't move here. there is nothing there.`);
				}
			}
		} else {
			GameSystem.log(`${this.name} can't move. he passed out.`);
		}
    }
    
    hurt(healthDecrease, reasonForHurt) {
        this.health -= healthDecrease;
        if(this.health > 0) {
            GameSystem.log(`${this.name} has been hurt (${reasonForHurt}) -> health ${this.health}%`);
        } else {
            GameSystem.log(`${this.name} has been hurt (${reasonForHurt}). he passed out.`);
        }
    }
}