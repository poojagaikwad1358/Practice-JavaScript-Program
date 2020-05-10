var fs = require('fs');
const file2 = 'file2.txt';

fs.stat(file2, function(err, statCheck){
    if(statCheck.isFile()){
        console.log('file is file type.')
    }
    else{
        throw 'File is file type'
    }
})