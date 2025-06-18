

let oyentes = [
    ["Juan", 1234567890, "03/08/1978", "juan@commonmail.com", "Bogotá"],
    ["Ana", 9876543210, "15/05/1985", "ana@commonmail.com", " Medellín"],
    ["Pedro", 1122334455, "22/11/1990", "pedro@commonmail.com", "Cali"],
    ["Luisa", 5566778899, "30/01/1995", "luisa@commonmail.com", "Cartagena"],
    ["María", 9988776655, "10/10/2000", "maria@commonmail.com", "Barranquilla"],
    ["Carlos", 10234597630, "05/12/1988", "carlos@commonmail.com", "Medellín"] 

        ];  
let canciones = [
            ["Despacito", "Luis Fonsi", 2017, "Pop"],
            ["La Bicicleta", "Carlos Vives y Shakira", 2016, "Pop"],
            ["Vivir Mi Vida", "Marc Anthony", 2013, "Salsa"]
        ];
var nuevoOyente = ["Sofia", 10234597630, "05/12/1988", "sofia@commonmail.com", "Medellín"];
oyentes.push(nuevoOyente);

for (let i = 0; i < oyentes.length; i++) {
    console.log("Oyente #" + (i + 1))

    for (let j = 0; j < oyentes.length; j++) {
        console.log("           " + oyentes[i][j])
}

}

console.log("Datos persons:" + oyentes[5]);
