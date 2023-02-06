let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function (person) {

	function calcularEdad (fecha) {
		let hoy = new Date();
		let cumpleanos = new Date(fecha);
		let edad = hoy.getFullYear() - cumpleanos.getFullYear();
		let m = hoy.getMonth() - cumpleanos.getMonth();
	
		if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
			edad--;
		}

		return edad;

	}

	return `Hello, my name is ${person.name} and I am ${calcularEdad(person.birthDate)} years old`;
}

console.log(people.map(simplifier));

/* OTRA SOLUCION
	return "Hello, my name is " + person.name + " and I am " + calcularEdad(person.birthDate) + " years old";
*/