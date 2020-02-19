

/*
//Facturial usado un ciclo
let num = 6;
let accumulator = 1;

for (i = 1; i < num; i++) {
	accumulator *= i;
	console.log(accumulator);

		
}	
*/

//Factorial usando función

const num = 7;
let accumulator;
let i = 1;


function factorial ( accumulator = 1 ) {

	
	if(i === num) {accumulator *= i; return accumulator;}

	accumulator *= i;

	i++;

	factorial(accumulator);

	}



factorial(accumulator);

//Más elegante
/*function factorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5));  

*/