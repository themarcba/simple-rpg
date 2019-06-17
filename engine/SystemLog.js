import UIController from "./UIController";

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
     * @param options
     */
    write(message, options = {}) {
        // defaults
        if(options.displayToUser === void 0) options.displayToUser = true;
        if(options.addToHistory === void 0) options.addToHistory = true;
        if(options.logToConsole === void 0) options.logToConsole = true;
        if(options.displayToDialog === void 0) options.displayToDialog = false;

        // executing
        if(options.displayToUser) UIController.displayMessage(message);
        if(options.addToHistory) UIController.addMessageToHistory(message);
        if(options.logToConsole) console.log(message);
        if(options.displayToDialog) UIController.showDialog(message);
    }

}

export default new SystemLog();