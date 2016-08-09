//DECLARACIÓN DE OBJETOS Y VARIABLES
var btnCalificacion = document.querySelector("#calificacion")
var btnAdivina      = document.querySelector("#adivina")
var btnEscribe      = document.querySelector("#escribe")


//DECLARACIÓN DE FUNCIONES
function obtenerCalificacion(){
	//alert("Hola calificacion")
	var calificacion = prompt('¿Cual es tu calificación?')
	if(isNaN(calificacion))
	{
		alert('No me engañes, esto no es una calificación')
	}else
	{
		var redondear = Math.round(calificacion)
		alert('Tu calificación es : ' + redondear)
	}
}

function adivinarNumero(){
	//alert("Hola adivina")
	var numero = prompt("¿Adivina un número entre 0 y 10?")
	var aleatorio, siAdivine, noAdivine, adivina;
	
	if(isNaN(numero))
	{
		alert("No me engañes, esto no es un número")
	}else
	{
		//aleatorio = Math.random()
		//aleatorio = Math.random()*10
		aleatorio = Math.round(Math.random()*10)

		siAdivine = "¡Felicidades adivinaste!, el número es: " + aleatorio
		noAdivine = "¡Suerte para la proxima!, el número es: " + aleatorio + " y tu elegiste el número:" + numero

		adivina = (aleatorio==numero)?siAdivine:noAdivine
		alert(adivina)
	}
} 

function cadenaTexto(){
	var cadena = prompt('Escribe algo')
	var longitud = cadena.length
	var mayusculas = cadena.toUpperCase()
	var minusculas = cadena.toLowerCase()

	alert('Cadena Original: ' + cadena + " '\nLongitud: " + longitud + "\n" + mayusculas + "\n" + minusculas)
}

function cargaDocumento(){
	btnCalificacion.addEventListener('click', obtenerCalificacion)
	btnAdivina.addEventListener('click', adivinarNumero)
	btnEscribe.addEventListener('click', cadenaTexto)
}

//DECLARACIÓN DE EVENTOS
window.addEventListener('load',cargaDocumento)