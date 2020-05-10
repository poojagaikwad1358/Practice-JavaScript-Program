console.log(data);
var data = 15;
console.log(data);

console.log(testLet);
let testLet = 15;
console.log(testLet);

const testConstant = 15;
testConstant = 20;
console.log(testConstant);

/*
// new Promise((resolve, reject)=>{
//     fs.exists(file, function(exist){
//         if(exist){
//             resolve(exist)
//         }
//     })
// })
// .then(()=>{
//     fs.stat(file, function(err, statCheck){
//         if(statCheck){
//             return statCheck;
//         }
//     })
// })
// .then(()=>{
//     fs.readFile(file, function(err, data){
//     const arrayData = data.toString().split(",");
//     const numberArray = arrayData.map(Number);
//     bubble(numberArray, function(sortedData){
//     console.log(sortedData);
//     })
        
//     })
// })
//readForSort();



fs.exists(file, checkExist);
function checkExist(exists){
    if(exists){
        fs.stat(file, StatcCheck)
    }
}

function StatcCheck(err, stats){
    if(stats.isFile()){
        fs.readFile(file, readFiles)
    }
}


function readFiles(err, data){
    console.log(data.toString());    
}
*/