var nombre = 'Lourdes'; //tipo Str
console.log(nombre);

var numero = 3000; //tipo numerico
console.log(numero);

var objeto ={
    nombre: "Lourdes",
    apellido: "Eschler",
    telefono: "2604545304"
}

console.log(objeto);

//tipo de dato boolean
var bandera=true;
console.log(bandera);

//tipo de dato funcion
function miFuncion(){}
console.log(miFuncion);

//tipo de dato symbol
var simbolo=Symbol("Mi simbolo");
console.log(simbolo);

//tipo de dato clase
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

console.log(Persona);