class SystemLog{

	constructor(){
		this.selector = 'body';
	}

	setSelector(selector){
		this.selector = selector;
	}

	/**
	 *
	 * @param message
	 * @param messageType
	 */
	write(message, messageType = 'info'){
		$(this.selector).append(`<div> ${message}</div>`);
		console[messageType](this.element);
		console[messageType](message);
	}

}

export default new SystemLog();