var fs = require('fs');
const file1 = 'file1.txt';

fs.exists(file1, function(exist){
    if(exist){
       console.log('file exists')
    }
    else{
        throw 'File dont exist';
    }

})