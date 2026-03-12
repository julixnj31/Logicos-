console.log("10 > 5 =", 10 > 5);
console.log("8 <= 8 =", 8 <= 8);
console.log("7 != '7' =", 7 != "7");
console.log("4 === 4 =", 4 === 4);
console.log("6 == '6' =", 6 == "6");

//punto 2 

// OPERADORES LOGICOS

console.log((true && true) || false);
console.log((5 > 2) && (10 < 8));
console.log(!(4 === "4"));
console.log((3 <= 3) || (7 > 10));

 // punto 3

// CONDICIONAL SIMPLE

let temperatura = 32;

if (temperatura >= 30) {
console.log("Hace calor");
} else {
console.log("Clima agradable");
}

//punto 4

// SWITCH MESES

let mes = 3;

switch(mes){

case 1:
console.log("Enero");
break;

case 2:
console.log("Febrero");
break;

case 3:
console.log("Marzo");
break;

case 4:
console.log("Abril");
break;

case 5:
console.log("Mayo");
break;

case 6:
console.log("Junio");
break;

case 7:
console.log("Julio");
break;

case 8:
console.log("Agosto");
break;

case 9:
console.log("Septiembre");
break;

case 10:
console.log("Octubre");
break;

case 11:
console.log("Noviembre");
break;

case 12:
console.log("Diciembre");
break;

default:
console.log("Mes no válido");

}