//DECLARACIÓN VARIABLES Y OBJETOS
var agente = navigator.userAgent.toLowerCase()
var plataforma = navigator.platform.toUpperCase()
var navegador = navigator.appName.toUpperCase()

var moviles = /iphone|ipod|ipad|android|blackberry|opera mini|iemobile/
//DECLARACIÓN FUNCIONES
function detectarDispositivo(){
	//alert("funciona")
	/*console.log(navigator)
	document.write(agente+"<br />")
	document.write(agente.search(moviles))
	console.log(agente.search(moviles))*/
	//El método search() ejecuta la búsqueda 
	//que encaje entre una expresión regular y el objeto String 
	//desde el que se lo llama.

	var aDondeVoy;

	if(agente.search(moviles)>-1)
	{
		//alert("Estas en un Dispositivo movil")
		//-1 aparece cuando no encontro nada
		aDondeVoy = "activos/mobile.html"
	}
	else
	{
		//alert("Estas en un Dispositivo de escritorio")
		aDondeVoy = "activos/desktop.html"
	}
	window.location.href = aDondeVoy;
}

function detectarUsuario()
{
	document.getElementById("user-agent").innerHTML = agente
	document.getElementById("plataforma").innerHTML = plataforma
	document.getElementById("navegador").innerHTML = navegador
}

//ASIGNACIÓN EVENTOS
window.addEventListener("load",detectarUsuario)