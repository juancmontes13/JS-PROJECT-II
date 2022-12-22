/*let plan = prompt("Digite la letra de su plan");
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
*/
/*
let numero = 0;
while (numero <= 50) {
    console.log('este curso es desarrollo web');
    numero = [planA, planB, planC, planD, planF];
}
*/
 
class Curso {
    constructor (id,nombre, precio, duracion, imagen, cantidad){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.duracion = duracion;
    this.imagen = imagen;
    this.cantidad = 1;
   }
       
    //metodos
    sumarImpuesto (){
        this.precio = this.precio * 1.19
    }
}

const html = new Curso (1, 'HTML', 50, '2 meses', 'images/html.jpg');
const javaScript = new Curso (2,'JavaScript', 50, '3 meses', 'images/js.jpg');
const react = new Curso (3,'React', 50, '1.5 meses', 'images/react.jpg');

arrayCursos = [html, javaScript, react];

let arrayCarrito = [];

if(localStorage.getItem("arrayCarrito")){
    arrayCarrito = JSON.parse(localStorage.getItem("arrayCarrito"))
}

arrayCursos.forEach((curso) => {
   console.log(curso);
})

arrayCursosConIva = arrayCursos.map((curso => {
    return {
        id: curso.id,
        nombre: curso.nombre,
        precio: (curso.precio * 1.19),
        duracion: curso.duracion,
        imagen: curso.imagen,
        cantidad: curso.cantidad,
    }
}))

//console.log(arrayCursosConIva);


const contenedorCursos = document.getElementById("contenedorCursos");



    arrayCursosConIva.forEach (curso => {
    const div = document.createElement("div");
    div.className = "carta grid--1x2 card--container";
    div.innerHTML = ` <div>
                         <img src="${curso.imagen}" alt="">
                      </div>                      
    <p class="header--text-dark header--text-pro">Curso ${curso.nombre}</p> <p class="card--text">Curso 100% online. 5 horas de videos con los mejores
    desarrolladores del país, ademas contaras con un seleccionado
    material complementario para que consolides tus conocimientos</p><p class="card--text card--text__precio">Precio con IVA = $ ${curso.precio}</p>
    <button id ="btnCarrito${curso.id}">Agregar al carrito</button>`
    contenedorCursos.appendChild(div);

    
const btnCarrito = document.getElementById(`btnCarrito${curso.id}`);
btnCarrito.addEventListener("click", () => {agregarAlCarrito(curso.id)});
    })

    
        

// Funcion agregar al carrito

const agregarAlCarrito = (id) => {
    const productoEnCarrito = arrayCarrito.find(curso => curso.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
        sumarEnIcon();
    } else {
        const curso = arrayCursosConIva.find(curso => curso.id === id);
        arrayCarrito.push(curso);
        sumarEnIcon();
        localStorage.setItem("arrayCarrito", JSON.stringify(arrayCarrito));
    }
    
       
}

// mostrar el carrito

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

//función para mostrar el carrito

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    arrayCarrito.forEach(curso => {
        const divCarrito = document.createElement("div");
        divCarrito.className = "carta grid--1x2 card--container";
        divCarrito.innerHTML = `<div>
                             <img src="${curso.imagen}" alt="">
                          </div>                      
                          <p class="header--text-dark header--text-pro">Curso ${curso.nombre}</p>
                          <p class="card--text">Curso 100% online</p>
                          <p class="card--text card--text__precio">Precio con IVA = $ ${curso.precio}</p>
                          <p class="card--text card--text__precio">Cantidad = ${curso.cantidad}</p>
                          <div class="sumaResta card--text__precio" >
                            <i   class="bi bi-dash-lg"></i>
                            <div  class="quantity">0</div>
                            <i  class="bi bi-plus-lg"></i>
                          </div> 
                          <button id ="eliminar${curso.id}">Eliminar</button>`
        contenedorCarrito.appendChild(divCarrito);
        
        const boton = document.getElementById(`eliminar${curso.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(curso.id);
        })

    })
    calcularTotal();
}





const eliminarDelCarrito = (id) => {
    const curso = arrayCarrito.find (curso => curso.id === id);
    const indice = arrayCarrito.indexOf(curso);
    arrayCarrito.splice(indice,1);

    mostrarCarrito();
    RestarEnIcon();
        localStorage.setItem("arrayCarrito", JSON.stringify(arrayCarrito));
}

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    arrayCarrito = [];
    mostrarCarrito();
    localStorage.clear();
}


// Mostrar total
const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    arrayCarrito.forEach(curso => {
        totalCompra += curso.precio * curso.cantidad; 
    })
    total.innerHTML = `Total $${totalCompra}`
}

const sumaIcon = document.getElementById("sumaIcon");
const restaIcon = document.getElementById("sumaIcon");

const sumarEnIcon = () => {
    let totalSuma = 0;
    arrayCarrito.forEach(curso => {
        totalSuma += curso.cantidad;
    })
    sumaIcon.innerHTML = `${totalSuma}`
}
const RestarEnIcon = () => {
    let totalResta = 0;
    arrayCarrito.forEach(curso => {
        totalResta -= curso.cantidad;
    })
    sumaIcon.innerHTML = `${totalResta}`
}


