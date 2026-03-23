function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "El número es par.";
  } else {
    return "El número es impar.";
  }
}

const userNumber = Number(prompt("Ingresá un número entero."));
const resultMessage = checkEvenOrOdd(userNumber);

document.write(`<p>${resultMessage}</p>`);