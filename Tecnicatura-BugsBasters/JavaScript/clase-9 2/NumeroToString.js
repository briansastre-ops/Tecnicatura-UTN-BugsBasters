// Convertir String a Number
let miNumero = "21"; // Es una cadena

console.log(typeof miNumero); // Muestra "string"

let edad2 = Number(miNumero); // Conversión a número
console.log(typeof edad2);     // Muestra "number"

if (edad2 >= 18) {
    console.log("Puede votar");
} else {
    console.log("Muy joven para votar");
}

// Operador ternario (opcional, más compacto)
let resultado3 = edad2 >= 18 ? "Puede votar" : "Muy joven para votar";
console.log(resultado3);
