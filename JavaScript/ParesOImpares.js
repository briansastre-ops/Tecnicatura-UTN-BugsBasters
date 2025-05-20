const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un número: ", function(input) {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
  } else {
    if (numero % 2 === 0) {
      console.log("El número " + numero + " es PAR.");
    } else {
      console.log("El número " + numero + " es IMPAR.");
    }
  }

  rl.close();
});
