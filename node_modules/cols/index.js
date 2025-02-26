#!/usr/bin/env node

var readline = require('readline');
var program = require('commander');

program
  .option('-c, --column <num>', 'Column to fetch')
  .option('-S, --sum', 'Sum numbers in column set by -c')
  .parse(process.argv);

if(!program.column) {
  console.error('Provide a column number');
  process.exit(1);
}

var column = parseInt(program.column);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var sum=0;
rl.on('line', function(line){
  var colItem = line.split(' ').filter(function(item) {
    return item !== '';
  })[column-1];
  if(!colItem) return;

  if(program.sum) {
    sum+= parseInt(colItem);
  } else {
    console.log(colItem);
  }
}).on('close', function() {
  if(program.sum) {
    process.stdout.write(sum +'');
  }
});
