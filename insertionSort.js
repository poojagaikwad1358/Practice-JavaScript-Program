var arr = [ 44,22,55,11,8,99 ]; 
var length = arr.length; 
        for (let i = 1; i < length; i++) { 
            var key = arr[i]; 
            var j = i - 1; 
  
            while (j >= 0 && arr[j] > key) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
     
        console.log('Sorted array:');

        for (let i = 0; i < length; i++) {
            console.log(arr[i]); 
        }
       
    
  
   
       
        