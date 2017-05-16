process.argv.forEach(function(item, index) {
	// 출력
	console.log(index + ' : ' + typeof(item) + ':', item);

	// --exit 있을 때
	if (item == '--exit') {
		var exitTime = Number(process.argv[index+1]);

		setTimeout(function() {
			process.exit();
		}, exitTime);
	
	}
});
