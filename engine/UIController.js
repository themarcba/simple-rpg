class UIController {

    constructor() {}

    static displayMessage(message) {
        document.getElementById('user-message').innerText = message;
    }

    static updateHealth(health) {
        document.getElementById('health').innerText = health;
        if (health >= 50) { // health good
            document.querySelector('.health-display').classList.remove('bad');
            document.querySelector('.health-display').classList.remove('critical');
            document.querySelector('.health-display').classList.add('good');
        } else if (health >= 20) { // health bad
            document.querySelector('.health-display').classList.remove('good');
            document.querySelector('.health-display').classList.remove('critical');
            document.querySelector('.health-display').classList.add('bad');
        } else { // health critical
            document.querySelector('.health-display').classList.remove('bad');
            document.querySelector('.health-display').classList.remove('good');
            document.querySelector('.health-display').classList.add('critical');
        }
    }

    static addMessageToHistory(message) {
        var e = document.createElement('div');
        e.innerHTML = `<div>${message}</div>`;

        while (e.firstChild) {
            document.querySelector('.game-logs').appendChild(e.firstChild);
        }
    }

    static showGameOver() {
        document.getElementById('game-over').style.display = 'block';
        setTimeout(() => {
            document.getElementById('game-over').style.opacity = 1;
        }, 100);
    }

    static showWalkingAnimation(player, direction) {
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

    static drawFieldToMap(coordX, coordY, FieldClass) {
        let ctx = document.getElementById('map').getContext("2d");
        let imageFile = "";


        let img = new Image();
        img.onload = function() {
            ctx.drawImage(img, (coordX + 1) * 100, (coordY + 1) * 100, 100, 100);
        }

        img.src = `images/${FieldClass.textureFile()}`;

        ctx.fillRect((coordX + 1) * 100, (coordY + 1) * 100, 100, 100);
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

    static buildBackpackView(player, itemType) {
        let el = document.getElementById(itemType);
        let backpackCompartment = player.backpack[itemType];
        el.innerHTML = `<h2>${itemType}</h2>`;
        backpackCompartment.forEach((liquid, itemIndex) => {
            let actionsHTML = ``;

            liquid.actions.map(action => action.name).forEach((actionName) => {
                actionsHTML += `<div class="${actionName} action" data-action="${actionName}" data-item-id="${itemIndex}" data-item-type="${itemType}">${actionName}</div>`;
            });
            let html = `
            <div class="item">
                <div class="title">
                    <span class="icon">🧪</span>
                    <span class="name">${liquid.name}</span>
                </div>
                <div class="description">${liquid.description}</div>
                <div class="actions">
                    ${actionsHTML}
                </div>
            </div>
            `;
            document.querySelector('#liquids').innerHTML += html;
        });
        UIController.showBackpack(false);
    }

    static showBackpack(show = true) {
        if (show) {
            if (document.getElementById('backpack').style.opacity == 0) {
                document.getElementById('backpack').style.opacity = 1;
            } else {
                document.getElementById('backpack').style.opacity = 0;
            }
        } else {
            document.getElementById('backpack').style.opacity = 0;
        }
    }
}

export default UIController;