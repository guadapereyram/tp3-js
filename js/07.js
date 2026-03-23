function showMultiplicationTable(number) {
  document.write(`<h2>Tabla del ${number}</h2>`);

  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    const result = number * multiplier;
    document.write(`<p>${number} x ${multiplier} = ${result}</p>`);
  }
}

const userNumber = Number(prompt("Ingresá un número para ver su tabla de multiplicar."));

showMultiplicationTable(userNumber);