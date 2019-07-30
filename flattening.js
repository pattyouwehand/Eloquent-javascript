let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((acc, currArray)=> acc.concat(currArray), []);

console.log(newArray)