const sumResults = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let rollCount = 1; rollCount <= 50; rollCount++) {
  const diceOne = Math.floor(Math.random() * 6) + 1;
  const diceTwo = Math.floor(Math.random() * 6) + 1;
  const totalSum = diceOne + diceTwo;

  sumResults[totalSum - 2]++;
}

document.write("<h2>Resultado de las sumas de los dados</h2>");
document.write("<ul>");

for (let index = 0; index < sumResults.length; index++) {
  const currentSum = index + 2;
  document.write(`<li>Suma ${currentSum}: ${sumResults[index]} apariciones</li>`);
}

document.write("</ul>");