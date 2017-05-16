var events = require('events');

//exports.timer = new process.EventEmitter();
exports.timer = new events();

setInterval(function() {
	exports.timer.emit('tick');
}, 1000);

