var n=1000;
var count = 0, distinct = 0; 
//return a random coupon between 0 and n-1

function getCoupon(n){
     return(Math.random() * n);
     console.log(Math.random() * n);
}


function collect(n){
   if(i==count){
       return true;
   }

    while(distinct < n){
        var value = getCoupon(n);
        count++;

        if(!isCollected[value]){
            distinct++;
            isCollected[value] = true;
        }
    }
    return count;
}