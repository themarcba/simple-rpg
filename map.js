function Field() {}

function Road() {
    Field.call();
    this.name = 'road';
    this.canMove = true;
}

function Grass() {
    Field.call();
    this.name = 'grass';
    this.canMove = true;
    this.enterAction = function(player) {
        if(Math.random() > 0.5) { // probability to get stung by bug 50%
            player.health -= 20;
            if(player.health > 0) {
                systemLog(`${player.name} has been stung by a bug. health ${player.health}%`);
            } else {
                systemLog(`${player.name} has been stung by a bug. he passed out.`);
            }
            
        }

    }
}

function Wall() {
    Field.call();
    this.name = 'wall';
    this.canMove = false;
    this.cantMoveReason = `this is a wall`;
}


function Map(fields) {
    this.fields = fields;
    this.setSpawnPoint = function(spawnPoint) {
        this.spawnPoint = spawnPoint;
    };
    this.connectFields = function(field1, field2, side) {
        switch (side) {
            case 'north':
                field1.north = field2;
                field2.south = field1;
                break;
            case 'east':
                field1.east = field2;
                field2.west = field1;
                break;
            case 'south':
                field1.south = field2;
                field2.north = field1;
                break;
            case 'west':
                field1.west = field2;
                field2.east = field1;
                break;

            default:
                break;
        }

        fields.forEach((field, index) => {
            field.id = index;
        });
    };
}