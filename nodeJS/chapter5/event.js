process.setMaxListeners(15); 
process.on('exit', function(code) {
	console.log('잘 가시오~~', code);
});

process.on('exit', function(code) {
	console.log('잘 가시오~~', code);
}); 

process.on('exit', function(code) {         console.log('잘 가시오~~', code); }); 
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });
process.on('exit', function(code) {         console.log('잘 가시오~~', code); });

process.on('uncaughtException', function(error) {
	console.log('에러가 발생했지만 봐준다.');
});

var count = 0;
var test = function() {
	count++;
	if ( count > 3 ) {
		return;
	}

	setTimeout(test, 2000);
	error.error.error();
}
setTimeout(test, 2000);


