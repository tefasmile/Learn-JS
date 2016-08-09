//DECLARACIÓN DE OBJETOS Y VARIABLES

//Arreglo: guarda datos de diferente información
/*var MiArreglo = new Array('cat',870,true);
console.log(MiArreglo);
console.log(MiArreglo[0]);
console.log(MiArreglo[1]);
console.log(MiArreglo[2]);
*/
var turno = 1;
var queTurno;
var arregloGato = new Array(9);
var celdas = document.getElementsByClassName('gato');

//DECLARACIÓN DE FUNCIONES
function gato(evento){
	//alert(e.target.id);
	var celda = evento.target;
	celda.removeEventListener("click",gato);
	var idCelda = evento.target.id;
	//alert(idCelda.length);
	//alert(idCelda[1]);

	var posicionAMarcar = idCelda[1]-1;
	//alert(posicionAMarcar);
	queTurno = turno % 2;

	if(queTurno!=0)
	{
		celda.innerHTML = "X";
		celda.style.background = "blue";
		arregloGato[posicionAMarcar] = "X";
		ganaJugador("O");
	}
	else if(queTurno == 0)
	{
		celda.innerHTML = "O";
		celda.style.background = "orange";
		arregloGato[posicionAMarcar] = "O";
		ganaJugador("X");
	}
	console.log(turno,queTurno,arregloGato);

	if(turno == 9)
	{
		alert('Empate');
		window.location.reload();
	}
	else{
		turno++;
	}
	 
}

function ganaJugador(letra){
	if(
		(arregloGato[0] == letra && arregloGato[1] == letra  && arregloGato[2] == letra) || 
		(arregloGato[3] == letra && arregloGato[4] == letra  && arregloGato[5] == letra) || 
		(arregloGato[6] == letra && arregloGato[7] == letra  && arregloGato[8] == letra) ||
		(arregloGato[0] == letra && arregloGato[3] == letra  && arregloGato[6] == letra) ||
		(arregloGato[1] == letra && arregloGato[4] == letra  && arregloGato[7] == letra) ||
		(arregloGato[2] == letra && arregloGato[5] == letra  && arregloGato[8] == letra) ||
		(arregloGato[0] == letra && arregloGato[4] == letra  && arregloGato[8] == letra) 
	)
	{
		alert('Jugador ' + letra + ' Gana');
		window.location.reload();
	}
}

function cargarDocumento()
{
	//document.getElementsByClassName("gato").addEventListener("click",gato);
	//console.log(document.getElementsByClassName("gato"));
	//document.getElementsByClassName('gato')[4].addEventListener("click",gato);
	//console.log(document.getElementsByClassName('gato'));
	var n = 0;
	
	while(n<celdas.length) 
	{
	  //console.log(n,celdas[n]);
	  celdas[n].addEventListener("click",gato);
	  n++;
	}

}

//ASIGNACIÓN DE EVENTOS
window.addEventListener("load",cargarDocumento);