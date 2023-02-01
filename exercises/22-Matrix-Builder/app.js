// Code goes here
function matrixBuilder (entero){

    let matrizFinal = [];

    const crearFila = () =>{

      let nuevaFila = [];
      
      for (let i = 0; i < entero; i++) {

        let numero = Math.floor(Math.random()*2);  
        nuevaFila.push(numero);

      }

      return nuevaFila;

    }

  for (let j = 0; j < entero; j++) {

    matrizFinal.push(crearFila());

  }

  return matrizFinal;
}

console.log(matrixBuilder(5))


/* OTRA SOLUCION

function matrixBuilder (entero){

    let nuevaFila =[];
    let matrizFinal = [];

    const crearFila = (arrFila) => {
      matrizFinal.push(arrFila);   
    }

    const filaAleatoria = () => {
        let numero = Math.floor(Math.random()*2);
        nuevaFila.push(numero);

      return nuevaFila;
    }

    for (let i = 0; i < entero; i++) {
      crearFila(filaAleatoria());
    }

  return matrizFinal;
}

*/

/* OTRA SOLUCION QUE DA SIEMPRE LAS 3 MISMAS FILAS
function matrixBuilder (entero){

    let nuevaFila =[];
    let matrizFinal = [];

   for (let i = 0; i < entero; i++) {

      let numero = Math.floor(Math.random()*2);

      nuevaFila.push(numero);
      
      matrizFinal.push(nuevaFila);

    }

  return matrizFinal;
}
*/


/* OTRA SOLUCION QUE NO DA ERROR PERO NO VA BIEN
function matrixBuilder (entero){
    let nuevaFila =[];
    let matrizFinal = [];

    const crearFila = (arrFila) => {
      matrizFinal.push(arrFila);   
    }

    const filaAleatoria = (entero) => {
      for (let j = 0; j < entero-2; j++) {
        let numero = Math.floor(Math.random()*2);
        nuevaFila.push(numero);   
      }
      return nuevaFila;
    }

    for (let i = 0; i < entero; i++) {
      crearFila(filaAleatoria(entero));
    }

  return matrizFinal;
}

*/