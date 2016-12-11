var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var myStrings = buf.toString();
console.log(myStrings.split('\n').length - 1);
