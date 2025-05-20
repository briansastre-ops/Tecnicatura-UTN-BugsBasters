const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese su edad: ", function(input) {
  const edad = parseInt(input);

  if (isNaN(edad)) {
    console.log("Por favor, ingrese un número válido.");
  } else {
    if (edad >= 18) {
      console.log("Usted es mayor de edad.");
    } else {
      console.log("Usted es menor de edad.");
    }
  }

  rl.close();
});
