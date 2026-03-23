function analyzeText(text) {
  if (text === text.toUpperCase()) {
    return "La cadena está formada solo por mayúsculas.";
  } else if (text === text.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
  }
}

const userText = prompt("Ingresá una cadena de texto.");
const resultMessage = analyzeText(userText);

document.write(`<p>${resultMessage}</p>`);