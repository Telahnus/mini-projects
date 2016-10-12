var fs = require("fs");

// READING STREAMS
/*var data = '';

//create readable stream
var readerStream = fs.createReadStream('input.txt');
//set encoding
readerStream.setEncoding('UTF8');
//event handlers
readerStream.on('data',function(chunk){
	data+=chunk;
});
readerStream.on('end',function(){
	console.log(data);
});
readerStream.on('error',function(err){
	console.log(err.stack);
});*/

// WRITING STREAMS
/*var data = 'Simply Easy Learning';
//create writable stream
var writerStream = fs.createWriteStream('output.txt');
//write data to stream with encoding
writerStream.write(data,'UTF8');
//mark end of file
writerStream.end();
//handle stream events
writerStream.on('finish',function(){
	console.log("Write completed.");
})
writerStream.on('error',function(err){
	console.log(err.stack);
});*/

// PIPING
/*var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream);*/

// CHAINING
var zlib = require("zlib");
//compress the file input.txt. to input.txt.gz
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));

console.log("Program Ended");