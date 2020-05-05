var string = 'Hello! username, How are you?';
console.log('Original string:'+string);

const readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var r2 = readline.createInterface;

rl.question('Enter username: ', (answer) => {
  var len=(answer.length);
    
    if(len<3) 
        console.log('Enter valid string.');
      
    else   { 
      
        r2 = string.replace('username',answer);
        console.log('Replaced String: '+r2);
    }
        rl.close(); 
});