var count,item,first = 0,last = key - 1,mid = (first +last) / 2;
var key = 8;
var arr = [1,2,3,4,5,6,7,8,9];

while(first <= last) {
    if(arr[mid] < item){
        first = mid + 1;

    }
    else if(arr[mid] == item) {
        console.log('Key found');

    }    
    else {
        last =mid - 1;
    }

    mid = (first+last)/2;

    if(first > last) {
        console.log('Key not found');
    }
}

