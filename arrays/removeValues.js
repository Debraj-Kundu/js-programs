/*
Q16. Write a JavaScript function to remove null, 0, ‘’, “”, false, undefined and NaN values from an array.
File name suggestion: removeValues.js
TestData:
console.log(removeValues([NaN, 0, 15, false, -22, ‘’,undefined, 47, null])); // [15, -22, 47]
*/


const removeValues = (inp) => inp.filter((e) => e !== null && e !== 0 && e !== '' && e !== "" && e !== false && e !== undefined && !isNaN(e));


console.log(removeValues([NaN, 0, 15, false, -22, '',undefined, 47, null])); 