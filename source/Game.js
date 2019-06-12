import Map from '../engine/Map';
import SystemLog from '../engine/SystemLog';
import Player from '../engine/Player';

import Grass from '../engine/Fields/Grass';
import Road from '../engine/Fields/Road';
import Water from '../engine/Fields/Water';

import UIController from '../engine/UIController';
import Tree from '../engine/Bodies/Tree';

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
        this.map.addField(6, 0, Water);
        this.map.addField(7, 0, Water);
        this.map.addField(8, 0, Water);
        this.map.addField(9, 0, Water);

        // Row 2
        this.map.addField(0, 1, Water);
        this.map.addField(1, 1, Grass);
        this.map.addField(2, 1, Road, {
            body: new Tree()
        });
        this.map.addField(3, 1, Grass);
        this.map.addField(4, 1, Water);

        this.map.addField(5, 1, Water);
        this.map.addField(6, 1, Water);
        this.map.addField(7, 1, Road);
        this.map.addField(8, 1, Road);
        this.map.addField(9, 1, Water);

        // Row 3
        this.map.addField(0, 2, Water);
        this.map.addField(1, 2, Road);
        this.map.addField(2, 2, Road);
        this.map.addField(3, 2, Road);
        this.map.addField(4, 2, Grass);

        this.map.addField(5, 2, Grass);
        this.map.addField(6, 2, Grass);
        this.map.addField(7, 2, Road);
        this.map.addField(8, 2, Road);
        this.map.addField(9, 2, Water);

        // Row 4
        this.map.addField(0, 3, Water);
        this.map.addField(1, 3, Grass);
        this.map.addField(2, 3, Road);
        this.map.addField(3, 3, Grass);
        this.map.addField(4, 3, Water);

        this.map.addField(5, 3, Water);
        this.map.addField(6, 3, Water);
        this.map.addField(7, 3, Road);
        this.map.addField(8, 3, Road);
        this.map.addField(9, 3, Water);

        // Row 5
        this.map.addField(0, 4, Water);
        this.map.addField(1, 4, Water);
        this.map.addField(2, 4, Water);
        this.map.addField(3, 4, Water);
        this.map.addField(4, 4, Water);

        this.map.addField(5, 4, Water);
        this.map.addField(6, 4, Water);
        this.map.addField(7, 4, Water);
        this.map.addField(8, 4, Road);
        this.map.addField(9, 4, Water);

        // Row 6
        this.map.addField(0, 5, Water);
        this.map.addField(1, 5, Water);
        this.map.addField(2, 5, Road);
        this.map.addField(3, 5, Water);
        this.map.addField(4, 5, Water);

        this.map.addField(5, 5, Grass);
        this.map.addField(6, 5, Water);
        this.map.addField(7, 5, Water);
        this.map.addField(8, 5, Road);
        this.map.addField(9, 5, Road, {
            body: new Tree()
        });

        this.map.addField(10, 5, Road);
        this.map.addField(11, 5, Road);
        this.map.addField(12, 5, Road);
        this.map.addField(13, 5, Road);
        this.map.addField(14, 5, Road);
        this.map.addField(15, 5, Road);
        this.map.addField(16, 5, Road);
        this.map.addField(17, 5, Road);
        this.map.addField(18, 5, Grass);
        this.map.addField(19, 5, Grass);

        // Row 7
        this.map.addField(0, 6, Water);
        this.map.addField(1, 6, Grass);
        this.map.addField(2, 6, Grass);
        this.map.addField(3, 6, Grass);
        this.map.addField(4, 6, Water);

        this.map.addField(5, 6, Water);
        this.map.addField(6, 6, Water);
        this.map.addField(7, 6, Water);
        this.map.addField(8, 6, Road);
        this.map.addField(9, 6, Water);

        // Row 8
        this.map.addField(0, 7, Water);
        this.map.addField(1, 7, Grass);
        this.map.addField(2, 7, Grass);
        this.map.addField(3, 7, Grass);
        this.map.addField(4, 7, Road);

        this.map.addField(5, 7, Road);
        this.map.addField(6, 7, Road);
        this.map.addField(7, 7, Road);
        this.map.addField(8, 7, Road);
        this.map.addField(9, 7, Water);

        // Row 9
        this.map.addField(0, 8, Water);
        this.map.addField(1, 8, Road);
        this.map.addField(2, 8, Road);
        this.map.addField(3, 8, Road);
        this.map.addField(4, 8, Water);

        this.map.addField(5, 8, Water);
        this.map.addField(6, 8, Water);
        this.map.addField(7, 8, Water);
        this.map.addField(8, 8, Grass);
        this.map.addField(9, 8, Grass);

        // Row 10
        this.map.addField(0, 9, Water);
        this.map.addField(1, 9, Water);
        this.map.addField(2, 9, Water);
        this.map.addField(3, 9, Water);
        this.map.addField(4, 9, Water);

        this.map.addField(5, 9, Water);
        this.map.addField(6, 9, Water);
        this.map.addField(7, 9, Water);
        this.map.addField(8, 9, Grass);
        this.map.addField(9, 9, Grass);

        this.map.setSpawnPoint(this.map.fields[2][2]);

        this.map.draw();

        this.player = new Player(username, this.map);

        UIController.updateHealth(this.player.health);

        window._map = this.map;
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
                let actionName = e.target.getAttribute('data-action');
                let itemId = e.target.getAttribute('data-item-id');
                let item = _this.player.backpack[itemId];

                if (_this.player.process(item, actionName)) {
                    if (item.oneTimeUse) _this.player.removeFromBackpack(item);
                    UIController.updateHealth(_this.player.health);
                } else {
                    SystemLog.write(`${_this.player.name} is not affectable by ${actionName}`);
                }
            }
            UIController.buildBackpackView(_this.player);
        });


    }


}

module.exports = Game;