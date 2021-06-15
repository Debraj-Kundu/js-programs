/*
Q27. Write a JavaScript program to sort the items of an array.
File name suggestion: sortObjArr.js
TestData:
console.log(sortObjArr([
  {type:“Volvo', year:2016},
  {type:“Saab”, year:2001},
  {type:“BMW”, year:2010}
], type)); // [{
  {type:“BMW”, year:2010}
  {type:“Saab”, year:2001},
  {type:“Volvo”, year:2016},
}]
console.log(sortObjArr([
  {type:“Volvo”, year:2016},
  {type:“Saab”, year:2001},
  {type:“BMW”, year:2010}
], year)); // [{
  {type:“Saab”, year:2001},
  {type:“BMW”, year:2010}
  {type:“Volvo”, year:2016},
}]
*/

const sortObjArr = (cars, key)=> cars.sort((a, b)=>{
  let x = a[key], y = b[key];
  if(x<y) return -1;
  else if(x>y) return 1;
  return 0;
});


console.log(sortObjArr([
  {type:'Volvo', year:2016},
  {type:'Saab', year:2001},
  {type:'BMW', year:2010}
], 'type')); 
console.log(sortObjArr([
  {type:'Volvo', year:2016},
  {type:'Saab', year:2001},
  {type:'BMW', year:2010}
], 'year'));