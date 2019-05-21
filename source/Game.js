import Map from '../engine/Map';
import SystemLog from '../engine/SystemLog';
import Player from '../engine/Player';

import Grass from '../engine/Fields/Grass';
import Road from '../engine/Fields/Road';
import Wall from '../engine/Fields/Wall';
import Water from '../engine/Fields/Water';

class Game {

    constructor(username) {
        this.configure();
        this.build(username);
        this.attachEvents();
    }

    /**
     * Change engine configuration
     */
    configure() {

        // change log container
        SystemLog.setSelector('.game-logs');

    }

    /**
     * Start game
     *
     * @param username
     */
    build(username) {
        this.map = new Map(this.fields);
        // Row 1
        this.map.addField(0, 0, Water);
        this.map.addField(1, 0, Water);
        this.map.addField(2, 0, Water);
        this.map.addField(3, 0, Water);
        this.map.addField(4, 0, Water);

        // Row 2
        this.map.addField(0, 1, Water);
        this.map.addField(1, 1, Grass);
        this.map.addField(2, 1, Road);
        this.map.addField(3, 1, Grass);
        this.map.addField(4, 1, Water);

        // Row 3
        this.map.addField(0, 2, Water);
        this.map.addField(1, 2, Road);
        this.map.addField(2, 2, Road);
        this.map.addField(3, 2, Road);
        this.map.addField(4, 2, Water);

        // Row 4
        this.map.addField(0, 3, Water);
        this.map.addField(1, 3, Grass);
        this.map.addField(2, 3, Road);
        this.map.addField(3, 3, Grass);
        this.map.addField(4, 3, Water);

        // Row 5
        this.map.addField(0, 4, Water);
        this.map.addField(1, 4, Water);
        this.map.addField(2, 4, Water);
        this.map.addField(3, 4, Water);
        this.map.addField(4, 4, Water);

        // this.map.addField(0, 0, Road);
        // this.map.addField(1, 0, Road);
        // this.map.addField(2, 0, Water);
        // this.map.addField(0, 1, Grass);
        // this.map.addField(1, 1, Wall);
        // this.map.addField(2, 1, Wall);
        // this.map.addField(0, 2, Road);
        // this.map.addField(1, 2, Road);
        // this.map.addField(2, 2, Road);
        this.map.printFields();
        this.map.setSpawnPoint(this.map.fields[1][1]);

        this.player = new Player(username, this.map);
        this.map.printMap();
        this.player.printPlayer();

    }

    /**
     * Bind elements
     */
    attachEvents() {
        let _this = this;
        document.onkeydown = function(event) {

            switch (event.keyCode) {
                case 38: // up arrow key pressed
                    _this.player.move('north');
                    break;
                case 39: // right arrow key pressed
                    _this.player.move('east');
                    break;
                case 40: // down arrow key pressed
                    _this.player.move('south');
                    break;
                case 37: // left arrow key pressed
                    _this.player.move('west');
                    break;
            }
        };

    }


}

module.exports = Game;