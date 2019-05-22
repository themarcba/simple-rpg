class SystemLog {

    constructor() {
        this.selector = '.game-logs';
    }

    setSelector(selector) {
        this.selector = selector;
    }

    /**
     *
     * @param message
     * @param messageType
     */
    write(message, messageType = 'log') {
        var e = document.createElement('div');
        e.innerHTML = `<div> ${message}</div>`;

        while (e.firstChild) {
            document.querySelector(this.selector).appendChild(e.firstChild);
        }

        console.log(message);
        document.getElementById('user-message').innerText = message;
    }

}

export default new SystemLog();