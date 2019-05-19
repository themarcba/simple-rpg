class Map {

	constructor(fields) {
        this.fields = [];
    }
    
    addField(coordX, coordY, FieldClass) {
        // create row if it doesn't exist
        if(!this.fields[coordX]) {
            this.fields[coordX] = [];
        }
        let newField = this.fields[coordY][coordX] = new FieldClass(coordX, coordY);

        // row above (Y-1), same X
        if(this.fields[coordY-1] && this.fields[coordY-1][coordX]) {
            console.log(`there is a field above the newly created one => ${this.fields[coordY-1][coordX].constructor.name}`);
            this.connectFields(newField, this.fields[coordY-1][coordX], 'north');
        }
        // row below (Y+1), same X
        if(this.fields[coordY+1] && this.fields[coordY+1][coordX]) {
            console.log(`there is a field above the newly created one => ${this.fields[coordY+1][coordX].constructor.name}`);
            this.connectFields(newField, this.fields[coordY+1][coordX], 'south');
        }
        // same row, box on the left (X-1)
        if(this.fields[coordY][coordX-1]) {
            console.log(`there is a field above the newly created one => ${this.fields[coordY][coordX-1].constructor.name}`);
            this.connectFields(newField, this.fields[coordY][coordX-1], 'west');
        }
        // same row, box on the lefrightt (X+1)
        if(this.fields[coordY][coordX+1]) {
            console.log(`there is a field above the newly created one => ${this.fields[coordY][coordX+1].constructor.name}`);
            this.connectFields(newField, this.fields[coordY][coordX-1], 'east');
        }

        return newField;
    }

    printFields() {
        let body = document.querySelector('body');
        for (let i = 0; i < this.fields.length; i++) {
            const fieldI = this.fields[i];
            console.log(i, fieldI.length);
            
            for (let j = 0; j < fieldI.length; j++) {
                console.log(j);
                
                const fieldJ = this.fields[i][j];
                body.innerHTML += this.fields[i][j].constructor.name.charAt(0);
            }
            body.innerHTML += '<br>';
        }
    }

	setSpawnPoint(field) {
		this.spawnPoint = field;
	}

	connectFields (field1, field2, side) {
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

		this.fields.forEach((field, index) => {
			field.id = index;
		});
    }
}