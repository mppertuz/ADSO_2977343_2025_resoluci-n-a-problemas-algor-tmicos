// Paso 1: Mostrar opciones al usuario
let figura = prompt("¿Qué figura deseas calcular? (triangulo, rectangulo, cuadrado, circulo)");
let calculo = prompt("¿Qué deseas calcular? (area o perimetro)");

// Paso 2: Convertir entrada a minúscula para evitar errores
figura = figura.toLowerCase();
calculo = calculo.toLowerCase();

// Paso 3: Declarar variable resultado
let resultado = 0;

// Paso 4: Control según la figura
switch (figura) {
    case "triangulo":
        if (calculo === "area") {
            let b = parseFloat(prompt("Ingrese la base:"));
            let h = parseFloat(prompt("Ingrese la altura:"));
            resultado = (b * h) / 2;
        } else if (calculo === "perimetro") {
            let a = parseFloat(prompt("Ingrese el lado a:"));
            let b = parseFloat(prompt("Ingrese el lado b:"));
            let c = parseFloat(prompt("Ingrese el lado c:"));
            resultado = a + b + c;
        }
        break;

    case "rectangulo":
        if (calculo === "area") {
            let a = parseFloat(prompt("Ingrese la altura:"));
            let b = parseFloat(prompt("Ingrese la base:"));
            resultado = a * b;
        } else if (calculo === "perimetro") {
            let a = parseFloat(prompt("Ingrese la altura:"));
            let b = parseFloat(prompt("Ingrese la base:"));
            resultado = 2 * (a + b);
        }
        break;

    case "cuadrado":
        let lado = parseFloat(prompt("Ingrese el lado:"));
        resultado = (calculo === "area") ? lado * lado : 4 * lado;
        break;

    case "circulo":
        let r = parseFloat(prompt("Ingrese el radio:"));
        resultado = (calculo === "area") 
                    ? Math.PI * r * r 
                    : 2 * Math.PI * r;
        break;

    default:
        alert("Figura no válida");
        break;
}

// Paso 5: Mostrar resultado (si fue válido)
if (resultado > 0) {
    alert("El " + calculo + " de " + figura + " es: " + resultado.toFixed(2));
}
