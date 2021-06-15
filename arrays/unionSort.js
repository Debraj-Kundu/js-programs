/*
Q15. Write a JavaScript program to compute the union of two arrays. 
File name suggestion: unionSort.js
TestData:
console.log(unionSort([1,0,2,3,4], [3,5,6,7,8,13])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 13]
console.log(unionSort([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0])); // [0, 1, 2, 3, 4, 6, 7]
console.log(unionSort([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 10, 100]
*/


const unionSort = (arr1, arr2)=>{
  const union = {}, res = [];
  arr1.forEach(e => union[e] = '');
  arr2.forEach(e => union[e] = '');
  for(let key in union)
    res.push(key);
  return res;
}

console.log(unionSort([1,0,2,3,4], [3,5,6,7,8,13])); 
console.log(unionSort([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0])); 
console.log(unionSort([1, 2, 3], [100, 2, 1, 10])); 