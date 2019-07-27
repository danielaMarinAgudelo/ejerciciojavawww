/* Ejercicio 3: Duplicar el contenido de los valores del arreglo
 *
 * e.g. [2, 3, 4] -> [4, 6, 8]
 *
 * Autor:
 * Fecha: 
 *
 */

 let arrayDoble = function(array, callback) {
   for (let i = 0; i < array.length; i++){
   	array[i] = callback(array[i]);
   }
   return array;
 };

 let array = [2, 3, 4];

 arrayDoble(array, (value) => {
   return value * 2;
 });

// Prueba (No modificar!)

if (array.length === 3 &&
    array[0] === 4 &&
    array[1] === 6 &&
    array[2] === 8) {
  console.log('Ejercicio 3 paso el test!');
} else {
  console.log('Ejercicio 3 no paso el test!');
}
function ejecutar3(){
	const parrafo1 = document.getElementById('respu1');
	const parrafo2 = document.getElementById('respu2');
	const parrafo3 = document.getElementById('respu3');

	 parrafo1.innerHTML = array[0];
	 parrafo2.innerHTML = array[1];
	 parrafo3.innerHTML = array[2];
};