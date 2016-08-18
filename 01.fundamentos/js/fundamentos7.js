//DECLARACIÓN DE OBJETOS Y VARIABLES
var down = document.querySelector("#down"),
    press = document.querySelector("#press"),
    up = document.querySelector("#up"),
    leftToRight = 0,
    topToBottom = 0,
    pagina = document.querySelector("#pagina"),
	pantalla = document.querySelector("#pantalla"),
	barra = document.querySelector("#barra"),
	subir = document.querySelector("#subir"),
	mapa = document.querySelector("#mapa"),
	iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0740844078605!2d31.13030681550344!3d29.977300828695512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f7de239bbcd%3A0xca7474355a6e368b!2sPir%C3%A1mides+de+Giza!5e0!3m2!1ses-419!2ses!4v1471443203031" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';


//DECLARACIÓN DE FUNCIONES
function moverObjeto(queTecla)
{
	//console.log(queTecla)
	if(queTecla == 37)//cursor left
	{
		//caja.style.left = "-100px"
		leftToRight -= 10
		caja.style.left = leftToRight+"px"
	}
	else if(queTecla == 38)//cursor up
	{
		//caja.style.top = "-100px"
		topToBottom -= 10
		caja.style.top = topToBottom+"px" 
	}
	else if(queTecla == 39)//cursor right
	{
		//caja.style.left = "100px"
		leftToRight += 10
		caja.style.left = leftToRight+"px"
	}
	else if(queTecla == 40)//cursor down
	{
		//caja.style.top = "100px"
		topToBottom += 10
		caja.style.top =topToBottom+"px" 
	}
	else if(queTecla == 82)// tecla R redondear elemento
	{
		caja.style.borderRadius = "100%"
	}
	else if(queTecla == 67)// tecla C
	{
		caja.style.borderRadius = "0%"
	}
}

function teclado(event)
{
	//event:desencadena eventos en este caso teclado
	//console.log("parametro",event)
	//evento como objeto
	evento = window.event
	//console.log("Objeto",evento)

	if(evento.type == "keydown")
	{
		down.innerHTML = "keydown: " +String.fromCharCode(evento.keyCode) + " ---> " +evento.keyCode
	}
	else if(evento.type == "keypress")
	{
		press.innerHTML = "keypress: " + String.fromCharCode(evento.keyCode) + "--->" +evento.keyCode
	}
	else if(evento.type == "keyup")
	{
		up.innerHTML = "keyup: " + String.fromCharCode(evento.keyCode) + "--->" +evento.keyCode
	}

	moverObjeto(evento.keyCode)
}

function raton(evento){
	//console.log(evento)
	evento = window.event;
	pagina.innerHTML = "Coordenadas de ratón en la página X:" + evento.pageX + " y la " + "coordenada en eje Y: " + evento.pageY; 
	pantalla.innerHTML = "Coordenadas de ratón en la pantalla X:" + evento.screenX + " y la " + "coordenada en eje Y: " + evento.screenY; 

}

function barrasScroll(evento)
{
	//console.log(evento)

	var barraV = document.body.scrollTop,
		barraH = document.body.scrollLeft;

	console.log(barraV,barraH)

	if(barraV > 100)
	{
		subir.style.opacity = 1
	}
	else
	{
		subir.style.opacity = 0
	}
}

function mediaQueries()
{
	anchoPantalla = window.outerWidth
	altoPantalla = window.outerHeight
	console.log(anchoPantalla,altoPantalla)

	if(anchoPantalla > 1024)
	{
		mapa.innerHTML = iframe
	}
	else
	{
		mapa.innerHTML = null
	}
}

function cargaDocumento()
{
	//EVENTOS TECLADO
	document.addEventListener("keydown",teclado)
	document.addEventListener("keypress",teclado)
	document.addEventListener("keyup",teclado)

	document.addEventListener("mousemove",raton)

	window.addEventListener("scroll",barrasScroll)

	subir.addEventListener("click", function(){
		document.body.scrollTop = 0;
		document.body.scrollLeft = 0;
	})
	//console.log(subir)
	//rediccionamiento de la pantalla
	window.addEventListener("resize",mediaQueries)
}


//DECLARACIÓN DE EVENTOS
window.addEventListener('load',cargaDocumento)