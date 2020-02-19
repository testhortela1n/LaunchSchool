//Extrae números pares de un myArray
/*

const myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

let newArray = [];


const numeroPar = myArray.map((value) => {
  if (value % 2 === 0) {return newArray.push(value)}
});

console.log(newArray);
*/

//Extrae números pares de un nested array

const myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let newArray = [];

for (i=0; i < myArray.length; i++) {
  for (j=0; j < myArray[i].length; j++) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      newArray.push(value);
    }
  }
}

console.log(newArray);
