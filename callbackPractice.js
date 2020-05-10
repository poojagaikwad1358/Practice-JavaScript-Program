function sum(c){
    console.log('sum of a+b='+c);

}
function print(callback){
    var a=10,b=20;
    var c=a+b;
    callback(c);
}
print(sum);

// another way to write same code
function printAgain(callback){
    var a=10,b=30;
    var c=a+b;
    callback(c);
}

printAgain(c=>console.log('Sum is: '+c));