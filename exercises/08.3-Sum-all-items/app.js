function sumTheElements(theArray){
	
	let total = 0;
	
	//your code here
	for (let i of theArray) {
		
		total += i;
	}

	return total;
}

console.log(sumTheElements([2,13,34,5]));

/* OTRA SOLUCION
function sumTheElements(theArray){
	
	let total = 0;
	
	//your code here
	for (let i = 0; i < theArray.length; i++) {
		
		total += theArray[i]
	}

	return total;
}
*/

/* SE PUEDE HACER CON EL METODO REDUCE PERO AQUI QUIEREN FOR
const initialValue = 0;
const sumWithInitial = array1.reduce( (accumulator, currentValue) => {
	accumulator + currentValue,
  	initialValue
);
*/

/* OTRA SOLUCION, HAY QUE PONER EL ARRAY TAMBIEN AL LLAMAR A LA FUNCION

function sumTheElements(theArray){
	let total = 0;
	//your code here
	for (i in theArray){
		total += theArray[i];
	}
	return total;
}
console.log(sumTheElements());
*/

/* SOLUCION DADA
function sumTheElements(sumArray){
	
	sumArray =[2,13,34,5]
	let total = 0;
	
	//your code here
	for (let i = 0; i < sumArray.length; i++) {
		
		total += sumArray[i]
	}

	return total;
}
*/