/*EJERCICIO 1 DEL PUNTO 2 TALLER*/

//Llamado de libreria para usar un ingreso de datos por terminal
const prompt = require("prompt-sync")();

//Declaracion y llamado de funcion fecha para obtener año actual
const fecha = new Date();
const añoActual = fecha.getFullYear();

//Ingreso de año de nacimiento usuario
let ingreso = Number(prompt("Ingrese su año de nacimiento: "));

//Calculo de edad usuario
let edad = añoActual - ingreso;

//Imoresion de calculo edad del usuario
console.log("Tu edad es: ",edad);

//-------------------------------------------------------------------

/*EJERCCIO 2 DEL PUNTO 2 TALLER*/

//Ingreso de datos
let num1 = Number(prompt("Ingrese un numero para sumar: "));
let num2 = Number(prompt("Ingrese un otro numero: "));
suma = num1+num2;

console.log("La suma de los numeros es: ", suma);