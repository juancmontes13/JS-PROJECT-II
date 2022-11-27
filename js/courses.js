let plan = prompt("Digite la letra de su plan");
let planA = 50;
let planB = 90;
let planC = 130;
let planD = 'Coming Soon'
let planF = 'Coming Soon'

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
        alert('Tienes 20% de descuento, el valor total es de $' + resta );
    } else {
        alert('no tienes descuento');
    };   
};
break;
default:
    alert('Escriba un dato valido');
};

/*
let numero = 0;
while (numero <= 50) {
    console.log('este curso es desarrollo web');
    numero = [planA, planB, planC, planD, planF];
}
*/
 
class Curso {
    constructor (nombre, precio, duracion){
    this.nombre = nombre
    this.precio = precio
    this.duracion = duracion
   }
       
    //metodos
    sumarImpuesto (){
        this.precio = this.precio * 1.19
    }
}

const html = new Curso ('HTML', 50, '2 meses');
const javaScript = new Curso ('JavaScript', 50, '3 meses');
const react = new Curso ('React', 50, '1.5 meses');

arrayCursos = [html, javaScript, react];


arrayCursos.forEach((curso) => {
   console.log(curso);
})

arrayCursosConIva = arrayCursos.map((curso => {
    return {
        nombre: curso.nombre,
        precio: (curso.precio * 1.19),
        duracion: curso.duracion,
    }
}))

console.log(arrayCursosConIva);



const contenedorCursosIva = document.getElementById("papa");

arrayCursosConIva.forEach (curso => {
    let div = document.createElement("div");
    div.innerHTML = ` <p>${curso.nombre}</p> <p>Precio con IVA = $ ${curso.precio}</p>
    <button>Agregar al carrito</button>`
    contenedorCursosIva.appendChild(div);
})




