// initialise chaining variable with function that has name outer
var chaining = function outer(){
    // intialize variable a with value 10
    var a = 10;
    // printing message
    console.log('Printing Outer function')
    // printing value of a
    console.log('Value of a: '+a);
  /* console.log('value of b:'+b);  
  here we can not access value of inner function it throws error */
   
  // create new function having name inner
  function inner(){
        // inintialize variable b with value 20
        var b = 20;
        // printing message
        console.log('Printing inner function')
        /* printing value of a from outer function 
        inner function having access of outer function */
        console.log('Value of a: '+a);
        console.log('Value of b: '+b);
       
        //create one more inner fuction in inner function
        function innerINinner(){
            //initialize var c=30
            var c= 30;
            //printing message
            console.log('Printing innerInInner function');
            //printing value of a,b
            console.log('Value of a: '+a);
            console.log('Value of a: '+b);
            //returning value of c from ininerINineer function 
            return 'value of c: '+c
        }
        //return innerINinner function
        return innerINinner()
    }
    // here we are returning inner function
    return inner()    
}

// initialize new variable output with chaining function
var output = chaining();
// printing output variable
console.log(output);
