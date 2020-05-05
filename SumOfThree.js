var arr=[1,0,-1,4,-4];
var size=arr.length;
var found;
console.log('Array is:', ...arr) ;

console.log('\nPair of three elements who gives zero sum:');
for(let i=0; i<size-2; i++){
    for (let j=i+1; j<size-1; j++) 
        { 
            for (let k=j+1; k<size; k++) 
            { 
                if (arr[i]+arr[j]+arr[k] == 0) 
                { 
                    var c=arr[i]+arr[j]+arr[k];
                    console.log(arr[i],'+',arr[j],'+',arr[k] +' = '+c); 
                   
                    found = true; 
                } 
            } 
        } 
    }
    if(found!=true)
    {
        console.log('Not exist.');
    }