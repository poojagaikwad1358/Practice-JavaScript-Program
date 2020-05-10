/*Creating three function addition ,substraction, multplication
  all are return their respective result */
function addition(val){
    return val+5;
}

function substraction(val){
    return val-3;
}

function multiplication(val){
    return val*5;
}
/*creating promise variable and inintialise it with new promise 
resolve to show result and reject for stop*/
var promise = new Promise(function (resolve,reject){
    resolve(5);
})

//calling addition function
promise.then(addition)
//calling sunstraction function
.then(substraction)
//calling multiplication function
.then(multiplication)
//calling function to print result
.then(function(message){
    //printing result
    console.log('Result: '+message);
})
//if all of above are not gives result then throw error
.catch(function (err){
    //printing error
    console.log(err);
})