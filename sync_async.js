var fs = require('fs');
console.log(1);
// Sync 동기방식
var data = fs.readFileSync('./data.txt', {encoding: 'utf8'});
console.log(data);

// Async 비동기방식
console.log(2);
fs.readFile('./data.txt', {encoding: 'utf8'}, function(err, data){
    console.log(3);
    console.log(data);
});

console.log(4);
