var fs = require("fs");

//var data = fs.readFileSync('input.txt');
	// note the SYNC, for synchronous, script will WAIT
//console.log(data.toString());

fs.readFile('input.txt', function(err,data){
	if (err) return console.error(err);
	console.log(data.toString());
});
	//this method uses a callback and does not block execution

console.log("Program Ended");