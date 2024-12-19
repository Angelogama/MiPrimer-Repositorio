var numero = "";
var numMuestra = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";
    
function sumar() {
    numero1 = Number(numero);
    operador = "+";
    numero= "";
    Escribir('+')
    
}
function restar() {
    numero1 = Number(numero);
    operador = "-";
    numero = "";
    Escribir('-')
}
function multiplicar() {
    numero1 = Number(numero);
    operador = "*";
    numero = "";
    Escribir('*')
}
function dividir() {
    numero1 = Number(numero);
    operador = "/";
    numero = "";
    Escribir('/')
}
function Escribir(P_numero) {
    if (P_numero == "+") {
        //num1.avalue = num1.avalue + "+";
    } else {
        numero = numero + P_numero;
    }
    numMuestra = numMuestra + P_numero;
    num1.avalue = numMuestra;

}

function resultado() {
    numero2 = Number(numero);
    if (operador == "+") {
        resultado = numero1 + numero2;
        num1.avalue = resultado;
    }
} 
