
const contenedorApi = document.getElementById('contenedorApi');
//---API---

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '263ce2f79amsh480ddbd866908cep146e82jsnb51227af27fe',
		'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
	}
};

fetch('https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/summary/', options)
	.then(response => response.json())
	.then((data)=> {
        console.log(data);
        mostrarDatos();
    } )
	.catch(err => console.error(err));

    function mostrarDatos(datos) {
        datos.array.forEach(elemento => {
            const div = document.createElement('div');
            div.src = "https://jsonplaceholder.typicode.com/photos";
            
        });

    }