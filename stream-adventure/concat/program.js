//'npm install concat-stream'
var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(buf) {
    var out = buf.toString().split('').reverse().join('');
    out += '\n';
    
    process.stdout.write(out);
  }));
