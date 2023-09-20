/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar */

let edad=45;

//edad = prompt('Ingresa tu edad: ');

if(edad >= 18){
    console.log("Puedes votar");
} else {
    console.log("Aun eres un bebe");
} 

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones */

const calificaciones = [5, 6, 8, 5];

const suma1 = calificaciones.reduce((valorAnterior, valorActual) => {
  return valorAnterior + valorActual;
}, 0);

let promedio = suma1/4;

console.log("Su promedio es: ",promedio);

if( promedio>= 7){
    console.log("Aprobado");
} else {
    console.log("Reprobado");
} 

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8 */

let numb = 336;

console.log("El número", numb, "es divisible entre 7 y 8: ");


if( (numb / 7) == 0 && (numb / 8) == 0){
    console.log("Verdadero");
} else {
    console.log("Falso");
} 

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * */

let num = 336;

console.log("El número", num, "es divisible entre 7 y 8: ");


if( (num / 4) == 0 && (num / 9) == 0){
    console.log("Verdadero");
} else {
    console.log("Falso");
} 


/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 */

let operMate = "division";
let num1 = 6;
let num2 = 3;

switch (operMate){
    case "suma" : 
    let resul = num1 + num2;
        console.log("La Suma de los numero: ", num1, "y", num2, "es: ", resul);
        break;
    case "resta" :
        let resul1 = num1 - num2;
        console.log("La Resta de los numero: ", num1, "y", num2, "es: ", resul1);
        break;
    case "multiplicacion" : 
        let resul2 = num1 * num2;
        console.log("La Multiplicación de los numero: ", num1, "y", num2, "es: ", resul2);
        break;
    case "division" :
        let resul3 = num1 / num2;
        console.log("La División de los numero: ", num1, "y", num2, "es: ", resul3);
        break;
    default :
        console.log("No existe ese dia");
        break;
}

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 */

let typeFilm = "terror";
switch (typeFilm){
    case "accion" : 
        console.log("Duro de matar\nEscape bajo fuejo\nJohn Wick");
        break;
    case "drama" :
        console.log("La ballena\nEl gran Pez\nLA LA LAND");
        break;
    case "comedia" : 
        console.log("CODA\nQue paso Ayer\nThe Break-Up");
        break;
    case "romance" :
        console.log("All my Life\nMi primer amor\nThe Notebook");
        break;
    case "suspenso" : 
        console.log("Demonio negro\nManhunter\nBuscando...");
        break;
    case "terror" :
        console.log("La Monja\nEvil Dead\nHuesera");
        break;
    default :
        console.log("No existe esa categoria de pelicula");
        break;
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM */

/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 */

let opcion = "dolares";
switch (opcion){
    case "dolares" : 
        console.log("Dia 1");
        break;
    case "euros" :
        console.log("Dia 2");
        break;
    case "yenes" : 
        console.log("Dia 3");
        break;
    case "libra" :
        console.log("Dia 4");
        break;
    case "franco" : 
        console.log("Dia 5");
        break;
    default :
        console.log("No existe ese dia");
        break;
}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 */

let precio = 30;
let descuento = "DESCUENTO10";

if(descuento === "DESCUENTO10"){

    let des = precio * .10;
    let desfinal = precio - des;
    console.log("El precio del producto con el desde es: ", desfinal);
} else {
    console.log("Aun eres un bebe");
} 