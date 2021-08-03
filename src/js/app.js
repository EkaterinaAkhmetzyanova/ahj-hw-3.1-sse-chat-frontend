import Widget from "./widget";

const widget = new Widget(document.querySelector('.chat-container'), 'wss://chat-testtest.herokuapp.com/ws');
widget.init();
