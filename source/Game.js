import Map from '../engine/Map';
import SystemLog from '../engine/SystemLog';
import Player from '../engine/Player';

import Grass from '../engine/Fields/Grass';
import Road from '../engine/Fields/Road';
import Wall from '../engine/Fields/Wall';
import Water from '../engine/Fields/Water';

import UIController from '../engine/UIController';

class Game {

    constructor(username) {
        this.configure();
        this.build(username);
        this.attachEvents();
    }

    /**
     * Change engine configuration
     */
    configure() {}

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
        this.map.addField(5, 0, Water);

        // Row 2
        this.map.addField(0, 1, Water);
        this.map.addField(1, 1, Grass);
        this.map.addField(2, 1, Road);
        this.map.addField(3, 1, Grass);
        this.map.addField(4, 1, Water);
        this.map.addField(5, 1, Water);

        // Row 3
        this.map.addField(0, 2, Water);
        this.map.addField(1, 2, Road);
        this.map.addField(2, 2, Road);
        this.map.addField(3, 2, Road);
        this.map.addField(4, 2, Road);
        this.map.addField(5, 2, Road);

        // Row 4
        this.map.addField(0, 3, Water);
        this.map.addField(1, 3, Grass);
        this.map.addField(2, 3, Road);
        this.map.addField(3, 3, Grass);
        this.map.addField(4, 3, Water);
        this.map.addField(5, 3, Water);

        // Row 5
        this.map.addField(0, 4, Water);
        this.map.addField(1, 4, Water);
        this.map.addField(2, 4, Water);
        this.map.addField(3, 4, Water);
        this.map.addField(4, 4, Water);
        this.map.addField(5, 4, Water);
        this.map.setSpawnPoint(this.map.fields[2][2]);

        this.map.draw();

        this.player = new Player(username, this.map);

        UIController.updateHealth(this.player.health);
    }

    /**
     * Bind elements
     */
    attachEvents() {
        let _this = this;

        // Key stroke
        document.onkeydown = function(event) {
            if (_this.player.canMove()) {
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
                    case 32: // space
                        UIController.showBackpack();
                        break;

                }
            }
        };

        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('action')) {
                let itemId = e.target.getAttribute('data-item-id');
                if (e.target.classList.contains('drink')) {
                    _this.player.drink(_this.player.backpack.liquids[itemId]);
                }
            }
            UIController.buildBackpackView(_this.player);
        });


    }


}

module.exports = Game;