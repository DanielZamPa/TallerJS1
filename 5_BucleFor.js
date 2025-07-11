const prompt = require("prompt-sync")();

for(i=0; i<=10; i++){
    console.log(i);
}

let num = Number(prompt("Ingrese un numero para ver su tabla de multiplicar: "));
for(i=0; i<=10; i++){
    console.log(num," * ",i," = ", num*i);
}