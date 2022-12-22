/** AJAX Y FETCH **/

//AJAX es una tecnología que nos permite hacer peticiones asíncronas a un servidor sin necesidad de recargar la página. Esta en desuso pero es importante conocerla. 

//1) Vamos a conectarnos a jsonplaceholder, que es una API que nos permite practicar con peticiones AJAX. 

const url = "https://jsonplaceholder.typicode.com/users"; 

//2) Creamos un objeto de tipo XMLHttpRequest. 

const xhr = new XMLHttpRequest();

//¿Qué es este objeto? https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest


//3) Creamos una función manejadora. 

function manejador() {
    if(this.readyState === 4 && this.status === 200) {
    //¿Qué es ReadyState? Es un atributo que nos indica el estado de la petición. Si es 4 significa que la petición ha terminado. 
    //¿Qué es el status? Es un atributo que nos indica el estado de la respuesta. Si es 200, significa que la respuesta es correcta. 
        const datos = JSON.parse(this.response);
        console.log(datos);
        mostrarUsuarios(datos);
    }
}

//4) Ahora tengo que llamar a un evento "load" y pasarle como parámetro la función manejadora. 

xhr.addEventListener("load", manejador);

//5) Ahora tengo que abrir la conexión con el método "open" y pasarle como parámetro el método de la petición y la url. 

xhr.open("GET", url);

/** MÉTODOS MÁS COMUNES **/

//GET: para pedir información a un servidor. 
//POST: para enviar información a un servidor. 
//PUT: para actualizar información en un servidor. 
//DELETE: para eliminar información en un servidor. 

//6) Ahora tengo que enviar la petición con el método "send"

xhr.send();

/** CREAMOS UNA FUNCIÓN PARA MOSTRAR USUARIOS **/

const app = document.getElementById("app");

function mostrarUsuarios(datos) {
    datos.forEach( usuario => {
        const li = document.createElement("li");
        li.textContent = `${usuario.id} - ${usuario.name}`
        app.appendChild(li);
    })
}

/** FETCH **/

//JS nos ofrece fetch() para hacer peticiones HTTP a algún servicio externo. Como estas peticiones son asincrónicas, convenientemente fetch trabaja con promesas: 

/** 
 sintaxis: 

 fetch(url, opciones)


*/

//El primer parámetro es la URL a la cual se le realiza la petición y un segundo parámetro opcional de configuración. 

const apiFotos = "https://jsonplaceholder.typicode.com/photos";

const contenedorFotos = document.getElementById("contenedorFotos");

fetch(apiFotos)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        console.log(datos);
        mostrarFotos(datos);
    })
    .catch(error => console.log(error))


function mostrarFotos(datos) {
    datos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto.thumbnailUrl;
        //contenedorFotos.appendChild(img);
    })
}

/** CRIPTO YA **/

const criptoYa = "https://criptoya.com/api/dolar";

const divDolar = document.getElementById("divDolar");

setInterval( () => {
    fetch(criptoYa)
        .then(response => response.json())
        .then(( {blue, ccb, ccl, mep, oficial, solidario}) => {
            divDolar.innerHTML = `
                <h2> Tipos de Dolar </h2>
                <p> Dolar Oficial: ${oficial} </p>
                <p> Dolar Solidario: ${solidario} </p>
                <p> Dolar MEP: ${mep} </p>
                <p> Dolar CCL: ${ccl} </p>
                <p> Dolar CCB: ${ccb} </p>
                <p> Dolar Blue: ${blue} </p>
                `
        })
        .catch(error => console.error(error))

}, 3000)


/** RUTAS RELATIVAS **/
//Nos permite trabajar con un archivo JSON de forma local. Diapo 60

const listado = document.getElementById("listado");
const listadoProductos = "json/productos.json";

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            listado.innerHTML += `
            <h2> Nombre: ${producto.nombre} </h2>
            <p> Precio: ${producto.precio} </p>
            <p> ID: ${producto.id} </p>
            `
        })
    })
    .catch(error => console.log(error))
    .finally( () => {
        console.log("Proceso Finalizado ahhhhh");
    })