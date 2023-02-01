/* MI CODIGO, NO SABIA QUE TENIA QUE PONER YO EL ARRAY TAMBIEN

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

function sumTheElements(theArray){
	
	let total = 0;
	
	//your code here
	for (let i = 0; i < theArray.length; i++) {
		
		total += theArray[i]
	}

	return total;
}

console.log(sumTheElements([2,13,34,5]));