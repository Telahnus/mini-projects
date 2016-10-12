// import events module
var events  = require('events');
//create an eventemiiter object
var eventEmitter = new events.EventEmitter();

//create an event handler
var connectHandler = function connected(){
	console.log('connection successful.');
	//fire its own event
	eventEmitter.emit('data_received');
}

//bind connection event with handler
eventEmitter.on('connection',connectHandler);
//bind data_received event with anonymous function
eventEmitter.on('data_received',function(){
	console.log('data received successfully.');
});

//fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");