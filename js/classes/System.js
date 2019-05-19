class System{

	constructor(selector = 'body'){
		this.element = document.querySelector(selector);
	}

	log(message, messageType = 'log'){
		this.element.innerHTML += `${message}<br>`;
		console[messageType](message);
	}

}

GameSystem = new System();