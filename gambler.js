
var stake=50,goal=250,trials=1000;
var bets=0,wins=0;

  for(let i=0; i<trials; i++){
      var cash=stake;
      while(cash > 0 && cash < goal){
          bets++;
          if(Math.random()< 0.5){
              cash++;
          }
          else{
              cash--;
          }
          if(cash == goal){
              wins++;
          }
      }
  }
  var a=100.0 * wins / trials;
  var b=1.0 * bets / trials;
  
  console.log(wins+ ' Wins of ' +trials);
  console.log('Percentage won: '+a);
  console.log('Avg of bets = ' + b);

  