
import Map from '../engine/Map';
import SystemLog from '../engine/SystemLog';
import Player from '../engine/Player';

import Grass from '../engine/Fields/Grass';
import Road from '../engine/Fields/Road';
import Wall from '../engine/Fields/Wall';

class Game {

    constructor(username){

        this.username = username;

        this.configure();

        this.start();

        this.attachEvents();

    }

    /**
     * Change engine configuration
     */
    configure(){

        // change log container
        SystemLog.setSelector('.game-logs');

    }

    /**
     * Start game
     *
     * @param username
     */
    start(username){

        console.log('Starting game for:',this.username);

        this.fields = [
            new Road(),
            new Grass(),
            new Road(),
            new Wall()
        ];

        this.map = new Map(this.fields);
        this.map.addField(0,0,Road);
        this.map.addField(1,0,Road);
        this.map.addField(2,0,Road);
        this.map.addField(0,1,Grass);
        this.map.addField(1,1,Wall);
        this.map.addField(2,1,Wall);
        this.map.addField(0,2,Road);
        this.map.addField(1,2,Road);
        this.map.addField(2,2,Road);
        this.map.printFields();
        this.map.setSpawnPoint(this.map.fields[0][0]);

        this.player = new Player(this.username, this.map);

    }

    /**
     * Bind elements
     */
    attachEvents(){

        let controls = $('.game-controls');

        if(controls){

            // movement in field
            controls.find('.movement-button').each((index, element) => {

                let button = $(element);
                let direction = button.data('direction');

                button.on('click',(event) => {

                    this.player.move(direction);

                    event.preventDefault();
                    event.stopPropagation();

                });

            });

        }else{
            console.log('Controls not found!');
        }

    }


}

module.exports = Game;