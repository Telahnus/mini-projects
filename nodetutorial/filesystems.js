var fs = require("fs");

// ASYNC VS SYNC READS
/*//async read
fs.readFile('input.txt', function(err,data){
	if (err) return console.error(err);
	console.log("Asynchronous read: "+data.toString());
});
//sync read
var data = fs.readFileSync('input.txt');
console.log("synchronous read: "+data.toString());*/

// FILE OPENING
/*// async file open
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err,fd){
	if (err) return console.error(err);
	console.log("File opened successfully!");
});*/

// FILE INFO
/*console.log("Going to get file info!");
fs.stat('input.txt',function(err,stats){
	if (err) return console.error(err);
	console.log(stats);
	console.log("Got file info successfully");
	//check file type
	console.log("isFile ? "+stats.isFile());
	console.log("isDirectory ? "+stats.isDirectory());
});*/

// FILE WRITING
/*console.log("Going to write into existing file");
fs.writeFile('input.txt','Simply Easy Learning', function(err){
	if (err) console.error(err);
	console.log ("daa written successfully!");
	console.log("lets read the new data");
	fs.readFile('input.txt',function(err,data){
		if (err) console.error(err);
		console.log("async read: "+data.toString());
	});
});
*/

// FILE READ
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt','r+',function(err,fd){
	if (err) console.error(err);
	console.log("File opened successfully");
	console.log("Going to read file");
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if (err) console.error(err);
		console.log(bytes+" bytes read");
		if (bytes>0) console.log(buf.slice(0,bytes).toString());
	});
});

console.log("Program Ended");