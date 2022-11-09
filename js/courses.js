let plan = prompt("Digite la letra de su plan");
let planA = 50;
let planB = 90;
let planC = 130;

//FUNCIÓN

let resta = 0;
function valorDescuento (valor, porcentaje) {
  resta = valor - (valor * porcentaje);
  console.log('el valor con descuento es $' + resta)
};

//LOOP

switch (plan){
    case "A":
if (plan == 'A'){
    alert('Valor a pagar $' + planA)
    let edad = prompt("¿Es menor de 18 años? Si o No");
    if(edad == 'Si') {
        valorDescuento (planA, 0.2);
        alert('Tienes 20% de descuento, el valor total es de $' + resta )
    } else {
        alert('no tienes descuento');
    };   
};
break;
case "B":
if (plan == 'B'){
    alert('Valor a pagar $' + planB)
    let edad = prompt("¿Es menor de 18 años? Si o No");
    if(edad == 'Si') {
        valorDescuento (planB, 0.2);
        alert('Tienes 20% de descuento, el valor total es de $' + resta )
    } else {
        alert('no tienes descuento');
    };   
};
break;
case "C":
if (plan == 'C'){
    alert('Valor a pagar $' + planC)
    let edad = prompt("¿Es menor de 18 años? Si o No");
    if(edad == 'Si') {
        valorDescuento (planC, 0.2);
        alert('Tienes 20% de descuento, el valor total es de $' + resta )
    } else {
        alert('no tienes descuento');
    };   
};
break;
default:
    alert('Escriba un dato valido');
};



    






