import SystemLog from "./SystemLog";
import UIController from "./UIController";

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
            this.connectFields(newField, this.fields[coordY][coordX - 1], 'east');
        }

        return newField;
    }

    draw() {

        // Prepare canvas (draw full width and height with standard color)
        let numberOfRows = this.fields.length;
        let numberOfColumns = Math.max(...this.fields.map(field => field.length));
        let canvasWidth = (numberOfColumns + 1) * 100;
        let canvasHeight = (numberOfRows + 1) * 100;
        UIController.prepareMapCanvas(canvasWidth, canvasHeight);

        for (let i = 0; i < this.fields.length; i++) {
            const fieldI = this.fields[i];

            for (let j = 0; j < fieldI.length; j++) {
                this.fields[i][j].draw();
            }
        }
    }

    moveMap(coordinates) {
        UIController.moveMap(coordinates);
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
                if(field1) field1.north = field2;
                if(field2) field2.south = field1;
                break;
            case 'east':
                if(field1) field1.east = field2;
                if(field2) field2.west = field1;
                break;
            case 'south':
                if(field1) field1.south = field2;
                if(field2) field2.north = field1;
                break;
            case 'west':
                if(field1) field1.west = field2;
                if(field2) field2.east = field1;
                break;

            default:
                break;
        }

        this.fields.forEach((field, index) => {
            field.id = index;
        });
    }

}