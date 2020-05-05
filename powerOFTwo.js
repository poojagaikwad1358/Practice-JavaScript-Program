const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var i = 0 , powerOfTwo = 1;
rl.question('Enter number: ', (number) => {
    
    if(number > 0){
     
        while(i <= number){
            console.log('2^'+i+' = '+powerOfTwo );
            powerOfTwo = 2 * powerOfTwo;
            i = i + 1;
        }

    }
    else 
        console.log('This is negative number.');

    rl.close();
});