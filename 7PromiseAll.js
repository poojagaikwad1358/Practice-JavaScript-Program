//initialise two variable fs and util 
const fs = require('fs');
const util = require('util');
//inintialise file variable to store txt file
var file = 'Integer.txt'

/* initialize three variable to perform these 
operations exists,stat,readfile on file */
var existsFile = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var readFile = util.promisify(fs.readFile);

//cheking files are exists 
Promise.all([
    existsFile(file),
    existsFile('faceBookMessages.txt'),
    existsFile('faceBookNotification.txt')
])
//if files are exists then statchek
.then(stat=>{
  return  Promise.all([
        statCheck(file),
        statCheck('faceBookMessages.txt'),
        statCheck('faceBookNotification.txt')
    ])
})
//if statechek is true then read files
.then(info=>{
   return Promise.all([
        readFile(file),
        readFile('faceBookMessages.txt'),
        readFile('faceBookNotification.txt')
    ])
})
//after reading files print data of these files
.then(data=>{
    const [data1 , data2, data3] = data;
    console.log((data1.toString()));
    console.log((data2.toString()));
    console.log((data3.toString()));

})