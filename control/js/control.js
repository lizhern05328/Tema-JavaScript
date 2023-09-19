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

let num = 336;

console.log("El número", num, "es divisible entre 7 y 8: ");


if( (num / 7) == 0 && (num / 8) == 0){
    console.log("Verdadero");
} else {
    console.log("Falso");
} 

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * */




/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 */



/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 */

