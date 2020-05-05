
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number: ', (number) => {
 console.log('Prime Factors are:');
    for(let i = 2; number>1; i++) {

        while(number%i == 0) {

           console.log(i+' ');
           number = number/i;
        }
     }

     
    rl.close();
});