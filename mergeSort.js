var a = [ 10, 14, 19, 26, 27, 31, 33, 35, 42, 44];
var b = [] ;
b.length=10;
a.length=11;

var low, mid, high ;
   var l1, l2, i;

   for(let l1 = low, l2 = mid + 1, i = low; l1 <= mid && l2 <= high; i++) {
      if(a[l1] <= a[l2])
         b[i] = a[l1++];
      else
         b[i] = a[l2++];
   }
   
   while(l1 <= mid)  {  
      b[i++] = a[l1++];
   }
   while(l2 <= high){   
      b[i++] = a[l2++];
   }
   for(i = low; i <= high; i++){
      a[i] = b[i];
   }

   if(low < high) {
      mid = (low + high) / 2;
      sort(low, mid);
      sort(mid+1, high);
      merging(low, mid, high);
   } 
   console.log('List after sorting:');
   
   for(let i = 0; i < 10; i++){
      console.log(a[i]);
}