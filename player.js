function Player(name, map) {
    this.name = name;
    this.health = 100;
    this.map = map;
    this.currentField = map.spawnPoint;

    this.move = function(direction) {
        if(this.health > 0) {
            if (this.currentField[direction] && this.currentField[direction].canMove) {
                this.currentField = this.currentField[direction];
                systemLog(`moved ${direction}. now on field ${this.currentField.id} (${this.currentField.name})`);
                if(this.currentField.enterAction) {
                    this.currentField.enterAction(this);
                }
            } else {
                if (this.currentField[direction] && !this.currentField[direction].canMove) {
                    systemLog(`can't move here. ${this.currentField[direction].cantMoveReason}`);
                } else {
                    systemLog(`can't move here. there is nothing there.`);
                }
            }
        } else {
            systemLog(`${this.name} can't move. he passed away.`);
            
        }
    };

    systemLog(`player >${this.name}< created. health ${this.health}%.`);
    
    systemLog(`spawned on field ${this.currentField.id} (${this.currentField.name})`);
}