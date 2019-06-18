class UIController {

    constructor() {
        this.dialog = {
            dismissable: true
        };
        window._ui = this;
    }

    displayMessage(message) {
        document.getElementById('user-message').innerText = message;
    }

    updateHealth(health) {
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

    addMessageToHistory(message) {
        var e = document.createElement('div');
        e.innerHTML = `<div>${message}</div>`;

        while (e.firstChild) {
            document.querySelector('.game-logs').appendChild(e.firstChild);
        }
    }

    showGameOver() {
        document.getElementById('game-over').style.display = 'block';
        setTimeout(() => {
            document.getElementById('game-over').style.opacity = 1;
        }, 100);
    }

    turnPlayerInDirection(player, direction) {
        document.getElementById('player').className = `walk ${direction}`;
    }

    showWalkingAnimation(player, direction) {
        document.getElementById('player').className = `walk walking ${direction}`;

        this.disableControlsForMilliseconds(player, 1100);

        // remove walking animation after 1 second
        // this is necessary to animate two steps in the same direction
        setTimeout(() => {
            document.getElementById('player').classList.remove('walking');
        }, 1000);

    }

    prepareMapCanvas(canvasWidth, canvasHeight) {
        let canvas = document.getElementById('map');
        let ctx = document.getElementById('map').getContext("2d");

        // TODO: Find the value of the largest row
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.fillStyle = "#333";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    drawFieldToMap(coordX, coordY, field) {
        let ctx = document.getElementById('map').getContext("2d");
        let imageFile = "";


        let fieldImg = new Image();
        fieldImg.onload = function() {
            ctx.drawImage(fieldImg, (coordX + 1) * 100, (coordY + 1) * 100, 100, 100);
        };
        fieldImg.src = `images/${field.constructor.textureFile()}`;

        if (field.attached.item) {
            let itemImg = new Image();
            itemImg.onload = function() {
                ctx.drawImage(itemImg, (coordX + 1) * 100, (coordY + 1) * 100, 100, 100);
            };
            itemImg.src = `images/${field.attached.item.constructor.textureFile()}`;
        }
        if (field.attached.body) {
            let bodyImg = new Image();
            bodyImg.onload = function() {
                ctx.drawImage(bodyImg, (coordX + 1) * 100, (coordY + 1) * 100, 100, 100);
            };
            bodyImg.src = `images/${field.attached.body.constructor.textureFile()}`;
        }

        ctx.fillRect((coordX + 1) * 100, (coordY + 1) * 100, 100, 100);
    }

    moveMap(coordinates) {
        let screenWidth = document.getElementById('screen').offsetWidth;
        let screenHeight = parseInt(document.getElementById('screen').offsetHeight);
        let canvasWidth = document.getElementById('map').offsetWidth;
        let canvasHeight = parseInt(document.getElementById('map').offsetHeight);
        let mapCanvas = document.getElementById('map');
        let marginLeft = (coordinates.x - 1) * 100;
        let marginTop = (coordinates.y - 1) * 100;
        marginLeft = -((coordinates.x - 1) * 100 - ((screenWidth - 500) / 2));
        marginTop = -((coordinates.y - 1) * 100 - ((screenHeight - 500) / 2));
        console.log(marginLeft, marginTop);
        // 1050-100-800
        mapCanvas.style.marginLeft = (coordinates.x > 0) ? `${marginLeft}px` : '100px';
        mapCanvas.style.marginTop = (coordinates.y > 0) ? `${marginTop}px` : '100px';
    }

    disableControlsForMilliseconds(player, milliseconds) {
        player.isControlDisabled = true;
        setTimeout(() => {
            player.isControlDisabled = false;
        }, milliseconds);
    }

    buildBackpackView(player) {
        let el = document.getElementById('items');
        el.innerHTML = '';
        player.backpack.forEach((item, itemIndex) => {
            let actionsHTML = ``;

            item.actions.map(action => action.name).forEach((actionName) => {
                actionsHTML += `<div class="${actionName} action" data-action="${actionName}" data-item-id="${itemIndex}">${actionName}</div>`;
            });
            let html = `
            <div class="item">
                <div class="title">
                    <span class="name">${item.name}</span>
                </div>
                <div class="description">${item.description}</div>
                <div class="actions">
                    ${actionsHTML}
                </div>
            </div>
            `;
            document.getElementById('items').innerHTML += html;
        });
        this.showBackpack(false);
    }

    showBackpack(show = true) {
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

    showDialog(message, dismissable = true, actions = []) {
        if (this.dialog.timeout) {
            clearTimeout(this.dialog.timeout);
            this.dialog.timeout = null;
        }
        document.querySelector('#dialog .message').innerHTML = message;
        document.getElementById('dialog').className = 'open';
        this.dialog.dismissable = dismissable;

        if (dismissable) {
            this.dialog.timeout = setTimeout(() => {
                document.getElementById('dialog').className = '';
            }, 5000);
        }
    }

    hideDialog() {
        if (this.dialog.dismissable) {
            document.getElementById('dialog').className = '';
        }
    }
}

let instance = new UIController();
Object.freeze(instance);

export default instance;