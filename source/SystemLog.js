class SystemLog{

	constructor(selector = 'body'){
		this.element = document.querySelector(selector);
	}

	/**
	 *
	 * @param message
	 * @param messageType
	 */
	write(message, messageType = 'info'){
		this.element.innerHTML += `${message}<br>`;
		console[messageType](message);
	}

}

export  default new SystemLog();