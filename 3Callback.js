// Create function sum with parameter c
function sum(c){
    //ptint addition of a and b
    console.log('Addition of a + b = '+c);

}
// Create function print having function in parameter that is callback
function print(callback){
    //initialising value of a and b
    var a=10,b=20;
    // initalise variable c= a+b
    var c=a+b;
    //calling callback function with parameter c
    callback(c);
}
//calling print function with parameter of function sum
print(sum);