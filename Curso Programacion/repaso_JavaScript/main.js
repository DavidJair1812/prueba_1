var nombre = "David Jair ";
var edad = 26;

var concatenar="mi nombre es " + nombre +" y tengo " + edad + " años."; 

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1 style="color: chartreuse;">Soy la caja de datos </h1>
    <h2> Mi nombre es : ${nombre}</h2>
    <h3> Mi edad es: ${edad} años</h3>
`; 

if(edad <= 24){
    datos.innerHTML +=`<h1>Aun eres una persona Joven</h1>`;
} else{
    datos.innerHTML +=`<h1>Ya eres una persona Mayor</h1>`;
}

for(var i=0; i<=2021; i+=100){
    datos.innerHTML += `<h2>Estamos en el año: `+i;
}