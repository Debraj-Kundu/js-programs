/*
Q19. Write a JavaScript function to find the unique elements from two arrays. 
File name suggestion: differenceSorted.js
Test Data :
console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); // [“1”, “2", “3”, “10", “100”]
console.log(differenceSorted([1, 2, 3, 4, 5], [6, 1, 2, 3, 4, 5])); // [“1", “2”, “3", “4”, “5", “6”]
console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); // [“1", “2”, “3", “10”, “100"]
*/


const differenceSorted = (arr1, arr2)=>{
  let unique = {}, res = [];
  arr1.forEach(e => unique[e] = '');
  arr2.forEach(e => unique[e] = '');
  for(let key in unique)
    res.push(`${key}`)
  return res;
}

console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); 
console.log(differenceSorted([1, 2, 3, 4, 5], [6, 1, 2, 3, 4, 5])); 
console.log(differenceSorted([1, 2, 3], [100, 2, 1, 10])); 