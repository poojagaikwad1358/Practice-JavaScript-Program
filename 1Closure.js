/* Creating addition function that is 
self invoking function execute only once */
 var addition = (function(){
    
    // Initialise variable a having value 1    
     a = 0
    
    /* Addition function return anonymous function that perform 
       sum of outer variable with inner variable   */
    return function() {
        // Incrementing value of a by 2       
        a += 2
        // Initialising variable b by 4       
        b = 4
        // Initialise sum variable by sum of a and b
        sum = a + b
        // Print value of a and b
        console.log('a:'+a,'b: '+b)
        // Anonymous function return sum of a and b
        return 'sum: '+sum
       
    }
})()

/* Calling function addition to print value of a,b,sum 
   this perform addition function only once 
   gives output a:3 b:4 and sum: 7  */
console.log(addition());

/*  Again calling function addition to print value of a by incrementing 2,b,sum. 
    Here control will directly go to anonymous function while execution.
    gives output a:5 b:4 and sum: 9 */
console.log(addition());