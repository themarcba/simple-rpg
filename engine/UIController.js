class UIController {

    constructor() {
    }

    static displayMessage(message) {
        document.getElementById('user-message').innerText = message;
    }


}

export default UIController;