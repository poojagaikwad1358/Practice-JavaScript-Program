var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,1,2]

var union = [...new Set([...arr1, ...arr2])];
var intersection = arr1.filter(inter=>arr2.includes(inter))
console.log('Union:'+union)
console.log('Intersection:'+intersection)