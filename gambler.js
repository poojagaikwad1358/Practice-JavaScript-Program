
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
  var loss = trials - wins;
  var a=100* wins / trials;
  var b=100* loss / trials;
  
  console.log(wins+ ' Wins of ' +trials);
  console.log('Percentage of won: '+a);
  console.log('Percentage of loss = ' + b);

  