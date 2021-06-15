/*
Q14. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. 
File name suggestion: indexSum.js
TestData:
console.log(indexSum([1,0,2,3,4], [3,5,6,7,8,13])); // [4, 5, 8, 10, 12, 13]
console.log(indexSum([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0])); // [2, 6, 10, 4, 6, 1, 3]
*/


const indexSum = (arr1, arr2)=>{
  let l1 = arr1.length, l2 = arr2.length;
  let res = [];
  if(l1>=l2){
    let i=0;
    for(i=0; i<l2; i++)
      res.push(arr1[i]+arr2[i]);
    while(i != l1)
      res.push(arr1[i++]);
  } else{
    let i=0;
    for(i=0; i<l1; i++)
      res.push(arr1[i]+arr2[i]);
    while(i != l2)
      res.push(arr2[i++]);
  }
  return res;
}

console.log(indexSum([1,0,2,3,4], [3,5,6,7,8,13])); 
console.log(indexSum([1, 2, 3, 4, 6, 1, 3], [1, 4, 7, 0])); 