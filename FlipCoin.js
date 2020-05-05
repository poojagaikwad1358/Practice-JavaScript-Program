const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var head = 0, tail = 0, randomNumber = 1;

rl.question('Enter how many times ypu want to flip coin: ', (number) => {
    for (let i=0; i<number; i++){

        var random = Math.random();
        
        if(random<0.5){
            tail++;
        }
        else{
            head++;
        }
        randomNumber++;
    
        }
    
        var PercentageOfHead = (head*100)/number;
        var PercentageOfTail = (tail*100)/number;
    
        console.log('Percentage of head:'+PercentageOfHead);
        console.log('Percentage of tail:'+PercentageOfTail);

  rl.close();
});