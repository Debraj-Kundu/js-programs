/*
Q5. Write a simple JavaScript program to join all elements of the array into a string. 
File name suggestion: join.js
TestData:
console.log(join([“Red”, “Green”, “White”, “Black”])); // “Red,Green,White,Black”
console.log(join([“Red”, “Green”, “White”, “Black”], ‘’)); // “RedGreenWhiteBlack”
console.log(join([“Red”, “Green”, “White”, “Black”], ‘,’)); // “Red,Green,White,Black”
console.log(join([“Red”, “Green”, “White”, “Black”], ‘+’)); // “Red+Green+White+Black”
*/

const join = (arr, delimiter='')=> arr.join(delimiter);

console.log(join(['Red', 'Green', 'White', 'Black'])); 
console.log(join(['Red', 'Green', 'White', 'Black'], '')); 
console.log(join(['Red', 'Green', 'White', 'Black'], ',')); 
console.log(join(['Red', 'Green', 'White', 'Black'], '+')); 