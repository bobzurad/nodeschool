//'npm install split through'
var split = require('split');
var through = require('through');

var tr = through(write);

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);

var toLower = true;

function write(buf) {
  if (toLower) {
    this.queue(buf.toString().toLowerCase() + '\n');
  } else {
    this.queue(buf.toString().toUpperCase() + '\n');
  }
  toLower = !toLower;
}
