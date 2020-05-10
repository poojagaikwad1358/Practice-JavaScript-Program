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

//calling exists
existsFile(file)
//if file exists then return statcheck
.then((exists)=>{
    if(exists){
    return statCheck(file)
    }
})

//if statchek true then return readfile
.then((statCh)=>{
    if(statCh){
        return readFile(file);
    }
})

//if readfile true then print file data
.then((info)=>{
    console.log(info.toString());
})
