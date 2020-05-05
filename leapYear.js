const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter year: ', (year) => {

    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){

        console.log('leap year.');
    }
    else {

        console.log('Not leap year.');
    }

    rl.close();
});