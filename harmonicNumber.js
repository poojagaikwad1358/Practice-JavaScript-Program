const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var harmonicValue = 0;

rl.question('Enter the number: ' , (number) => {
 
    if(number!=0){
         for(let i=1; i<=number; i++){

            harmonicValue = harmonicValue+(1/i);
      }
        console.log(harmonicValue);
    }
    else{
        
        console.log('Enter valid number that shuould be greater than zero');
  }

  rl.close();
});

