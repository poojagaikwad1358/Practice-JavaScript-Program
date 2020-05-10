/*creating addition function and 
passing value and callback in parameter */
function addition(val,callback){
    
    //returning calback if err then it gives false else print result 
    return callback(val+10,false);
}

/*creating substraction function
 and passing value and callback in parameter */
function substraction(val,callback){
   
    //returning calback if err then it gives false else print result 
    return callback(val-10,false);
}

/*creating multiplication function 
and passing value and callback in parameter */
function multiplication(val,callback){
    
    //returning calback if err then it gives false else print result 
    return callback(val*5,false);
}
/* calling addition passing 5 as value and 
also calledfunction to store result and 
error if there is no error then go to next step */
addition(5,function(addition,err){
    
    if(!err){
        
        /* calling substraction passing 5 as value and 
        also calledfunction to store result and 
        error if there is no error then go to next step */
        substraction( addition, function(substraction,err){
            if(!err){
               
                /* calling multiplication passing 5 as value and 
                also called function to store result and 
                error if there is no error then go to next step */
                multiplication(substraction,function(multiplication,err){
                    if(!err){
                        //printing result
                        console.log('Result: '+multiplication);
                    }
                });
            }
        });
    }
});