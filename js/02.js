/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:*/

const cities = [];
let cityName = prompt('Ingresá una ciudad. Presioná "Cancelar" para finalizar.');

while (cityName !== null) {
  cities.push(cityName);
  cityName = prompt('Ingresá otra ciudad. Presioná "Cancelar" para finalizar.');
}

document.write(`<p>El arreglo de ciudades es: ${cities.join(", ")}</p>`);
document.write(`<p>La longitud del arreglo es: ${cities.length}</p>`);

if (cities.length > 0) {
  document.write(`<p>Elemento de la primera posición: ${cities[0]}</p>`);
}

if (cities.length >= 3) {
  document.write(`<p>Elemento de la tercera posición: ${cities[2]}</p>`);
}