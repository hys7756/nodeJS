var onUncaughtException = function(error) {
	console.log('예외 발생. 이번에는 pass');
	process.removeListener('uncaughtException', onUncaughtException);
};

// process.once('uncaughtException', onUncaughtException);
process.on('uncaughtException', onUncaughtException);
var test = function() {
	setTimeout(test, 2000);

	error.error.error();
};

setTimeout(test, 2000);
