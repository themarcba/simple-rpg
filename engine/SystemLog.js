class SystemLog {

    constructor() {
        this.selector = 'body';
    }

    setSelector(selector) {
        this.selector = selector;
    }

    /**
     *
     * @param message
     * @param messageType
     */
    write(message, messageType = 'info') {
        var e = document.createElement('div');
        e.innerHTML = `<div> ${message}</div>`;

        while (e.firstChild) {
            document.querySelector('body').appendChild(e.firstChild);
        }

        console[messageType](this.element);
        console[messageType](message);
    }

}

export default new SystemLog();