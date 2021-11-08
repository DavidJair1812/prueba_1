var numeroa;
var numerob;
var operacion;

function init(){
    //variables
    var igual = document.getElementById("igual");
    var multiplicacion = document.getElementById("multiplicacion");
    var divicion = document.getElementById("divicion");
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("sumar");
    var resta = document.getElementById("resta");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //Eventos
    uno.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "1";
        }else{
            resultado.textContent = "1";
        }
    }

    dos.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "2";
        }else{
            resultado.textContent = "2";
        }
    }

    tres.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "3";
        }else{
            resultado.textContent = "3";
        }
    }

    cuatro.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "4";
        }else{
            resultado.textContent = "4";
        }
    }

    cinco.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "5";
        }else{
            resultado.textContent = "5";
        }
    }

    seis.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "6";
        }else{
            resultado.textContent = "6";
        }
    }

    siete.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "7";
        }else{
            resultado.textContent = "7";
        }
    }

    ocho.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "8";
        }else{
            resultado.textContent = "8";
        }
    }
    nueve.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "9";
        }else{
            resultado.textContent = "9";
        }
    }

    cero.onclick = function(e){
        if(resultado.textContent != 0){
            resultado.textContent = resultado.textContent + "0";
        }else{
            resultado.textContent = "0";
        }
    }

    reset.onclick = function(e){
        resetear();
        //resultado.textContent = "0";
    }

    suma.onclick = function(e){
        numeroa = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e){
        numeroa = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick = function(e){
        numeroa = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    divicion.onclick = function(e){
        numeroa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        numerob = resultado.textContent;
        resolver();    
    }
}

function limpiar(){
    resultado.textContent = "0";
}

function resetear(){
    resultado.textContent = "0";
    numeroa = 0;
    numerob= 0;
    operacion ="";
}

function resolver(){
   var res = 0;
   switch(operacion){
        case "+":
           res = parseFloat(numeroa) + parseFloat(numerob);
        break

        case "-":
            res = parseFloat(numeroa) - parseFloat(numerob);
         break

        case "/":
           res = parseFloat(numeroa) /  parseFloat(numerob);
        break

        case "*":
           res = parseFloat(numeroa) * parseFloat(numerob);
        break
   }
   resetear();
   resultado.textContent = res;
}
