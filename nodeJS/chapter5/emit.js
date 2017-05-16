process.on('exit', function(code) {
	console.log('안녕히..');
});

process.exit();
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중');
