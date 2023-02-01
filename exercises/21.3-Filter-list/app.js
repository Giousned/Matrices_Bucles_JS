let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here

function filterByName (names,cadena){
  return names.filter(function(names){
    return names.toLowerCase().includes(cadena);
  });
}


/* IGUAL PERO CON FUNCION FLECHA

function filterByName (names,cadena){
    return names.filter(names => names.toLowerCase().includes(cadena));
}

*/

console.log(filterByName(names,"am"));


/* FUNCIONA SACADO DE INTERNET

function filterByName (query) {
  return names.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}


console.log(filterByName('am'));
*/