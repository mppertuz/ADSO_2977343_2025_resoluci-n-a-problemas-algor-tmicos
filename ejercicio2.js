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
    let edad = parseInt(prompt("Ingrese la edad de la persona # ,mínimo 1 máx 120" + (i + 1)));

    // Validación de la edad
    while (edad < 1 || edad > 120 || isNaN(edad)) {
       alert("Edad no válida. Debe ser una edad entre 1 y 120.");
       edad = parseInt(prompt("Ingrese la edad de la persona nuevamente#" + (i + 1)));
        }

    // Almacenamiento de la edad
    edades[i] = edad;
    suma = suma + edad;

    // Verificar si es menor de edad
    if (edad < 18) {
        menores = menores + 1;
    } else {
        mayores = mayores + 1;
    }

    // Verificar si es adulto mayor
    if (edad >= 60) {
        adultoMayor = adultoMayor + 1;
    }

    // Actualizar edad mínima y máxima
    if (edad < edadMinima) {
        edadMinima = edad;
    }
    if (edad > edadMaxima) {
        edadMaxima = edad;
    }

    // Calcular promedio
    let promedio = suma / (i + 1);

    // Mostrar resultados
    console.log("Edad ingresada: " + edad);
    console.log("Total de menores de edad: " + menores);
    console.log("Total de mayores de edad: " + mayores);
    console.log("Total de adultos mayores: " + adultoMayor);
    console.log("Edad mínima: " + edadMinima); 
    console.log("Edad máxima: " + edadMaxima);
    console.log("Promedio de edades: " + promedio.toFixed(2));

}



    