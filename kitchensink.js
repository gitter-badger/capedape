console.log(process.versions);
console.log('Object.create prototyping stuff ==================== ');
const testvar1 = { a: 1, b:2};
const testvar2 = Object.create(testvar1);
var testvar3 = Object.create(testvar1);
console.dir(testvar1);
console.dir(testvar2);
console.dir(testvar3);
console.log('Buffer ==================== ');
const buf = new Buffer('hello world', 'ascii');
console.log(buf.toString('hex'));
  // prints: 68656c6c6f20776f726c64
console.log(buf.toString('base64'));
  // prints: aGVsbG8gd29ybGQ=
  // 
var buf2 = new Buffer(20);
var len = buf2.write("Simply Easy Learning!");

console.log("Octets written : " +  len);

console.log("To String " + buf2.toString('utf8',0,len));
var json = buf2.toJSON(buf2);
console.log(json);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('readline ============');
rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log('Thank you for your valuable feedback:', answer);

  rl.close();
});

console.log('String Decoder ========');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

const cent = new Buffer([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = new Buffer([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));