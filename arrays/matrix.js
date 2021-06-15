/*
Q10. Write a JavaScript program which prints the matrix of the following array. 
File name suggestion: matrix.js
TestData:
console.log(matrix([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));
Sample Output :
[[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27],
[7, 4, 28, 14],
[3, 10, 26, 7]]
*/

const matrix = (...args) => {
  const res = [];
  
  for(let i=0; i<args.length; i++){
    res.push(args[i]);
  }
  return res;
}

console.log(matrix([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));