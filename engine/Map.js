import SystemLog from "./SystemLog";

export default class Map {

    /**
     *
     * @param fields
     */
    constructor() {
        this.fields = [];

    }

    /**
     *
     * @param coordX
     * @param coordY
     * @param {Field} FieldClass
     * @returns {*}
     */
    addField(coordX, coordY, FieldClass) {
        // create row if it doesn't exist
        if (!this.fields[coordX]) {
            this.fields[coordX] = [];
        }
        
        let newField = this.fields[coordY][coordX] = new FieldClass(coordX, coordY);

        // row above (Y-1), same X
        if (this.fields[coordY - 1] && this.fields[coordY - 1][coordX]) {
            // SystemLog.write(`🔗 there is a ${this.fields[coordY-1][coordX].constructor.name} above the newly created one. linking it.`);
            this.connectFields(newField, this.fields[coordY - 1][coordX], 'north');
        }
        // row below (Y+1), same X
        if (this.fields[coordY + 1] && this.fields[coordY + 1][coordX]) {
            // SystemLog.write(`🔗 there is a ${this.fields[coordY+1][coordX].constructor.name} above the newly created one. linking it.`);
            this.connectFields(newField, this.fields[coordY + 1][coordX], 'south');
        }
        // same row, box on the left (X-1)
        if (this.fields[coordY][coordX - 1]) {
            // SystemLog.write(`🔗 there is a ${this.fields[coordY][coordX-1].constructor.name} above the newly created one. linking it.`);
            this.connectFields(newField, this.fields[coordY][coordX - 1], 'west');
        }
        // same row, box on the lefrightt (X+1)
        if (this.fields[coordY][coordX + 1]) {
            // SystemLog.write(`🔗 there is a ${this.fields[coordY][coordX+1].constructor.name} above the newly created one. linking it.`);
            this.connectFields(newField, this.fields[coordY][coordX - 1], 'east');
        }

        return newField;
    }

    printMap() {
        let gameScreen = document.getElementById('screen');
        let canvas = document.getElementById('map');
        let ctx = document.getElementById('map').getContext("2d");
        let body = document.querySelector('body');
        let imageFile = "";

        // TODO: Find the value of the largest row
        canvas.width = this.fields[0].length * 100;
        canvas.height = this.fields.length * 100;

        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.fields.length; i++) {
            const fieldI = this.fields[i];

            for (let j = 0; j < fieldI.length; j++) {

                const fieldJ = this.fields[i][j];
                switch (this.fields[i][j].constructor.name) {

                    case 'Road':
                        imageFile = 'road.png';
                        break;
                    case 'Grass':
                        imageFile = 'grass.png';
                        break;
                    case 'Wall':
                        imageFile = 'wall.png';
                        break;
                    case 'Water':
                        imageFile = 'water.png';
                        break;

                    default:
                        break;
                }

                let img = new Image();
                img.onload = function () {
                    ctx.drawImage(img, j * 100, i * 100, 100, 100);
                }
                img.src = `images/${imageFile}`;
                
                // ctx.fillRect(j * 100, i * 100, 100, 100);

            }
        }
    }

    moveMap(coordinates) {
        let mapCanvas = document.getElementById('map');
        mapCanvas.style.marginLeft = (coordinates.x > 0) ? `-${(coordinates.x - 1) * 100}px` : '100px';
        mapCanvas.style.marginTop = (coordinates.y > 0) ? `-${(coordinates.y - 1) * 100}px` : '100px';
    }

    /**
     *
     * @param field
     */
    setSpawnPoint(field) {
        this.spawnPoint = field;
    }

    /**
     *
     * @param field1
     * @param field2
     * @param side
     */
    connectFields(field1, field2, side) {
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