// Arreglo para almacenar las edades
let edades = [];

// Contadores y acumuladores
let menores = 0;
let mayores = 0;
let adultoMayor = 0;
let suma = 0;
let edadMinima = 120;
let edadMaxima = 0;

// Bucle para solicitar las edades
for (let i = 0; i < 10; i++) {
    let edad = parseInt(prompt("Ingrese la edad de la persona #" + (i + 1)));

    // Validación de la edad
    while (edad < 1 || edad > 120 || isNaN(edad)) {
       alert("Edad no válida. Debe ser una edad entre 1 y 120.");
       edad = parseInt(prompt("Ingrese la edad de la persona nuevamente#" + (i + 1)));
        }
    }


    