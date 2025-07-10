/*EJERCICIO 1 DEL PUNTO 3 TALLER*/

//Llamado de libreria para usar un ingreso de datos por terminal
const prompt = require("prompt-sync")();

//Ingreso edad usuario
let edad = Number(prompt("Por favor ingrese su edad: "));

//Evaluacion edad
if (edad <= 18){
    //Impresion resultado
    console.log("Puedes entrar.");
}else{
    //Impresion resultado
    console.log("No puedes entrar.");
}
//----------------------------------------------------------
/*EJERCICIO 2 DEL PUNTO 3 TALLER*/

let num = Number(prompt("Ingrese un numero a evaluar: "));

if (num>0){
    console.log("El numero es positivo.");
}else if(num<0){
    console.log("El numero es negativo.");
}else{
    console.log("El numero es cero.");
}