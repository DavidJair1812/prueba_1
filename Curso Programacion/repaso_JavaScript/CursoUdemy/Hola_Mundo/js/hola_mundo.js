"use strict"

/*
alert("Hola Mundo");
document.write("Hola mundo desde JS");
*/
//console.log("Esto va en la consola");
//console.log(18+10);


//Variables
//una variable es un contenedor de informacion
var pais="Mexico";
var continente= "Americano";
var pais_continente = pais+ " "+continente;
let prueba = "Hola";

//alert(prueba);
console.log(pais, continente);
console.log(pais_continente);

//Let y Var

//Pueba con var
var numero = 40;
console.log(numero);

if(true){
    var numero =50;
    console.log(numero);
}
console.log(numero);

//Prueba con let
var texto= "este es un texto";
console.log(texto);

if(true){
    let texto = "esto no es un texto";
    console.log(texto);
}
console.log(texto);

//Constantes

var dia = "Miercoles";
const mes = "Noviembre";

dia = "Jueves";
//mes = "Diciembre";
console.log(dia, mes);

//Operadores y tipos de datos

//operadores
var numero1= 18;
var numero2= 10;
var operacion = numero1 + numero2;
alert("Este es la suma de " +numero1 +" y el numero "+numero2+" y el resultado es: "+operacion);

//Tipos de datos
var num =202;
console.log(typeof num);


if (numero1<=numero2) {
    alert("que esta pasando señor garcia!!");
}else{
    alert("pues no paso nada");
}

