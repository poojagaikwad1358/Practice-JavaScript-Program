var n=1000;

Coupon(1000);


function getCoupon(){
     return(Math.random() * n);
}


function isCollected(){
   if(i==count){
       return true;
   }
function Coupon(n){
    
    var count = 0, distinct = 0; 
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
}