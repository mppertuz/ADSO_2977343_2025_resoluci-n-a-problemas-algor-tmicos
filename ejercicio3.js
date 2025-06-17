
// Declarar los vectores
let vector1 = [];
let vector2 = [];

// Función para ingresar datos en orden ascendente
function ingresarvector(nombreVector) {

let vector = [];
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt(`Ingrese el número #${i + 1} para ${nombreVector}:`));

        // Validar número y orden ascendente
        while (
                isNaN(numero) || 
                (i > 0 && numero < vector[i - 1])
        ) {
            alert(`Error: Debe ingresar un número mayor o igual a ${vector[i - 1] ?? 'cero'} y válido.`);
            numero = parseInt(prompt(`Ingrese nuevamente el número #${i + 1} para ${nombreVector}:`));
        } 
        vector [i] = numero;
    }
    return vector;
}

// Ingreso de datos
vector1 = ingresarvector("Vector 1");
vector2 = ingresarvector("Vector 2");   

// Mezclar los dos vectores
let Mezcla = []
let i = 0, j = 0;

// Comparar y mezclar
while (i < vector1.length && j < vector2.length) {
    if (vector1[i] < vector2[j]) {
        Mezcla.push(vector1[i]);
        i++;
    } else {
        Mezcla.push(vector2[j]);
        j++;
    }
}

// Agregar lo que falte de cada vector

while (i < vector1.length) {
    Mezcla.push(vector1[i]);
    i++;
}
while (j < vector2.length) {
    Mezcla.push(vector2[j]);
    j++;
}

// Mostrar el resultado
console.log("Vector 1:", vector1);
console.log("Vector 2:", vector2);  
console.log("Vector Mezcla:", Mezcla);
alert("Vector 1: " + vector1.join(", ") + "\n" +
      "Vector 2: " + vector2.join(", ") + "\n" +
      "Vector Mezcla: " + Mezcla.join(", "));       


