function systemLog(message, messageType = 'info') {
    document.querySelector('body').innerHTML += `${message}<br>`;
    console[messageType](message);
}