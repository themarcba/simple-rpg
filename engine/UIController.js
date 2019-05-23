class UIController {

    constructor() {}

    static displayMessage(message) {
        document.getElementById('user-message').innerText = message;
    }

    static addMessageToHistory(message) {
        var e = document.createElement('div');
        e.innerHTML = `<div>${message}</div>`;

        while (e.firstChild) {
            document.querySelector('.game-logs').appendChild(e.firstChild);
        }
    }

    static showGameOver() {
        document.getElementById('game-over').style.opacity = 1;
    }

    static showWalkingAnimation(player, direction) {
        console.log('walk');

        document.getElementById('player').className = `walk walking ${direction}`;

        UIController.disableControlsForMilliseconds(player, 1100);

        // remove walking animation after 1 second
        // this is necessary to animate two steps in the same direction
        setTimeout(() => {
            document.getElementById('player').classList.remove('walking');
        }, 1000);

    }

    static prepareMapCanvas(canvasWidth, canvasHeight) {
        let canvas = document.getElementById('map');
        let ctx = document.getElementById('map').getContext("2d");

        // TODO: Find the value of the largest row
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    static drawFieldToMap(coordX, coordY, textureFile) {
        let ctx = document.getElementById('map').getContext("2d");
        let imageFile = "";


        let img = new Image();
        img.onload = function() {
            ctx.drawImage(img, coordX * 100, coordY * 100, 100, 100);
        }
        img.src = `images/${textureFile}`;

        ctx.fillRect(coordX * 100, coordY * 100, 100, 100);
    }

    static moveMap(coordinates) {
        let mapCanvas = document.getElementById('map');
        mapCanvas.style.marginLeft = (coordinates.x > 0) ? `-${(coordinates.x - 1) * 100}px` : '100px';
        mapCanvas.style.marginTop = (coordinates.y > 0) ? `-${(coordinates.y - 1) * 100}px` : '100px';
    }

    static disableControlsForMilliseconds(player, milliseconds) {
        player.isControlDisabled = true;
        setTimeout(() => {
            player.isControlDisabled = false;
        }, milliseconds);
    }
}

export default UIController;