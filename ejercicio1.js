let Figura = prompt("Ingrese el nombre de una figura geométrica (cuadrado, rectángulo, triángulo, círculo): ").toLowerCase();
let area, perimetro, base, altura, radio, lado1, lado2, lado3;
    
switch (Figura) {

    case "cuadrado":
        lado1 = parseFloat(prompt("Ingrese el lado del cuadrado: "));
        area = lado1 * lado1;
        perimetro = 4 * lado1;
        console.log(`El área del cuadrado es: ${area}`);
        console.log(`El perímetro del cuadrado es: ${perimetro}`);
        break; 

    case "rectángulo":
        base = parseFloat(prompt("Ingrese la base del rectángulo: "));
        altura = parseFloat(prompt("Ingrese la altura del rectángulo: "));
        area = base * altura;
        perimetro = 2 * (base + altura);
        console.log(`El área del rectángulo es: ${area}`);
        console.log(`El perímetro del rectángulo es: ${perimetro}`);
        break;      

    case "triángulo":
        base = parseFloat(prompt("Ingrese la base del triángulo: "));
        altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
        area = (base * altura) / 2;
        lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo: "));
        lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo: "));
        lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo: "));
        perimetro = lado1 + lado2 + lado3;
        console.log(`El área del triángulo es: ${area}`);
        console.log(`El perímetro del triángulo es: ${perimetro}`);
        break;          

    case "círculo":
        radio = parseFloat(prompt("Ingrese el radio del círculo: "));
        area = Math.PI * Math.pow(radio, 2);
        perimetro = 2 * Math.PI * radio;
        console.log(`El área del círculo es: ${area}`);
        console.log(`El perímetro del círculo es: ${perimetro}`);
        break;      

    default:
        console.log("Figura no reconocida. Por favor, ingrese cuadrado, rectángulo, triángulo o círculo.");
        break;      
    
    }