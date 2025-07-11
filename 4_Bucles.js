const prompt = require("prompt-sync")();

let num = Number(prompt("Ingrese un numero: "));
let contador = 0;
while(contador<=num){
    console.log(contador);
    contador++;
}

const pass = Number(1234);
let control = false;
while (control != true){
    let ingresoPass = Number(prompt("Ingrese su contrasena: "));
    if(pass === ingresoPass){
        console.log("Contraseña correcta");
        control = true;
    }
    else{
        console.log("Contraseña incorrecta");
    }
}