/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.*/

function calculateRectanglePerimeter(sideA, sideB) {
  return 2 * (sideA + sideB);
}

const rectangleSideA = Number(prompt("Ingresá el valor del lado A."));
const rectangleSideB = Number(prompt("Ingresá el valor del lado B."));

const perimeter = calculateRectanglePerimeter(rectangleSideA, rectangleSideB);

document.write(`<p>El perímetro del rectángulo es: ${perimeter}</p>`);