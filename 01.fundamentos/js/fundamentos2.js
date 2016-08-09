//1.DECLARACIÓN DE OBJETOS Y VARIABLES
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var numero = document.getElementById("numero");
var hola   = document.getElementById("hola");

var fecha  = new Date();
var hora   = fecha.getHours();
var dia    = fecha.getDay();
var minuto = fecha.getMinutes();
var segundo = fecha.getSeconds();

var bisiesto = document.getElementById("bisiesto");

var btnReloj = document.getElementById("reloj");
var detenerReloj = document.getElementById("detener-reloj");
var btnAlarma = document.getElementById("alarma");
var detenerAlarma = document.getElementById("detener-alarma");
var muestroHora = document.getElementById("muestro-hora");

//2.DECLARACIÓN DE FUNCIONES
function eventoClick(evento){
	//alert('Has presionado el boton');
	alert('Has presionado el boton en el evento' + evento.type + ' con el objeto de nombre id ' + evento.target.id);
	console.log(evento);

	evento.target.style.borderRadius = '1em';
	evento.target.style.fontSize = '2em';

	boton2.removeEventListener("click",eventoClick);
	boton2.addEventListener("dblclick",otroEventoClick);
}

function otroEventoClick(evento){
	alert('Has presionado el boton en el evento' + evento.type + ' con el objeto de nombre id ' + evento.target.id);
	console.log(evento);

	evento.target.style.background = 'black';
	evento.target.style.color = 'white';
}

function parImpar(){
	var numero = prompt("Ingresa un número");
	//isNaN - is Not a Number true si el valor es alfanumerico, false si es numerico
	if(isNaN(numero))
	{
		alert('No me engañes, eso no es un número');
	}else{
		//alert('Es un número :)');
		var modulo = numero % 2;
		var tipo   = (modulo==0)?"Par":"Es Impar";
		alert("El número " + numero + " es " + tipo);
	}
}

function saluda(){
	//alert(dia);
	/*
	Algoritmo para saludar:
		1)El dia tiene 24 horas que van de la 0 a la 23
		2)Decimos deja dormir de las 0 a las 5
		3)Decimos Buenos días de las 6 a las 11
		4)Decimos Buenos tardes de las 12 a las 18
		5)Decimos Buenos noches de las 19 a las 23
	*/

	var hojaCSS = document.createElement("link");
	hojaCSS.rel = "stylesheet";

	if(hora < 6)
	{
		alert('Deja dormir!!');
		hojaCSS.href = "activos/duermete.css";
	}
	//else if(hora > 5 && hora < 12);
	else if(hora >= 6 && hora <= 11)
	{
		alert('Buenos dias');
		hojaCSS.href = "activos/dia.css";
	}
	//else if(hora > 11 && hora < 19);
	else if(hora >= 12 && hora <= 18)
	{
		alert('Buenos tardes');
		hojaCSS.href = "activos/tarde.css";
	}
	else
	{
		alert('Buenas noches!');
		hojaCSS.href = "activos/noche.css";
	}
	document.head.appendChild(hojaCSS);

	switch(dia)
	{
		case 0:
			alert('Es domingo');
			break;
		case 5:
			alert('viernes fincho!');
			break;
		case 6:
			alert('sabado!');
			break;
		default:
			alert('Estoy a la espera del fincho!!');
	}
}

function anioBisiesto(){
	var anio = prompt('Escribe el año');

	if(isNaN(anio))
	{
		alert('No me engañes, eso no es un año');
	}
	else
	{
		/*1)El año debe ser divisible entre 4, por ejemplo 2004,2008
		2)Pero si el año es divisible entre 4 y 100, entonces no es bisiesto ej: 2100,2200
		3)Pero si el año es divisible entre 100 y 400, es biciesto por ej: 2000,2400*/
		if((anio%4 == 0 && anio%100 != 0) || anio%400 == 0){
			alert('Este año ' + anio + ' es bisiesto');
		}
		else
		{
			alert('El año ' + anio + ' no es bisiesto');
		}
	}
}

function reloj(){
	var fechaReloj  = new Date();
	var hrReloj     = fechaReloj.getHours();
	var dia         = fechaReloj.getDay();
	var minReloj    = fechaReloj.getMinutes();
	var segReloj    = fechaReloj.getSeconds();

	if(hrReloj <= 9)
	{
		hrReloj = "0" + hrReloj;
	}
	else if(minReloj<=9)
	{
		minReloj = "0" + minReloj;
	}
	else if(segReloj <= 9)
	{
		segReloj = "0" + segReloj;
	}
	
	muestroHora.innerHTML = "<h1>" + hrReloj + ":" + minReloj + ":" + segReloj +"</h1>";
	//muestroHora.innerHTML = new Date();
}

function alarma(){
	var audio = document.createElement("audio");
	audio.src = "activos/alarma.mp3";
	return audio.play();
}

//3.ASIGNACIÓN DE EVENTOS
//Los manejadores de eventos semánticos: se ejecutan a la carga del documento
//Manejador de eventos múltiple: Prender y apagar eventos en el momento que los necesite

//Manejador semantico
window.onload = function(){
	boton1.onclick = eventoClick;
	boton1.onclick = otroEventoClick;

	//Manejador multiple: se le quita la o a onclick y demas tipos de eventos
	//addEventListener(agrega evento) y removeEventListener(elimina evento)
	boton2.addEventListener("click",eventoClick);
	numero.addEventListener("click",parImpar);
	hola.addEventListener("click",saluda);
	bisiesto.addEventListener("click",anioBisiesto);
	btnReloj.addEventListener("click", function(){
		//setInterval(function,milliseconds,param1,param2,...)
		iniciarReloj = setInterval(reloj,1000);
	});

	detenerReloj.addEventListener("click", function(){
		clearInterval(iniciarReloj);
	});

	btnAlarma.addEventListener("click", function(){
		iniciarAlarma = setTimeout(alarma,3000);
	});

	detenerAlarma.addEventListener("click", function(){
		clearTimeout(iniciarAlarma);
	});
};