var array = [11, 12, 13, 14, 15, 17, 18, 19];
BinarySearch(array, 6)

function BinarySearch(array, key){
    var high  = 0, low   = array.length - 1, mid = Math.floor((low + high)/2);

    while(array[mid] != key && high < low)
    {
       if (key < array[mid])
        {
            low = mid - 1;
        } 
      else if (key > array[mid])
        {
            high = mid + 1;
        }
        mid = Math.floor((low + high)/2);
    }

 if (array[mid] != key)
 {
     console.log('key not found');
 } 
 else
 console.log('key found');
}

