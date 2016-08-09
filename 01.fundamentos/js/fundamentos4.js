//DECLARACION DE VARIABLES Y OBJETOS
//var paises = new Array("Mexico","Colombia","Peru","España","Argentina");
var paises = new Array();
paises[0] = new Array(
	"México", 
	"u-mx.png", 
	"b-mx.png", 
	"e-mx.png", 
	"Estados Unidos Mexicanos",
	"Republica Federal Presidencial",
	"Ciudad de Mexico (DF)",
	119426000,
	1964375
	);
paises[1] = new Array(
	"Colombia", 
	"u-co.png", 
	"b-co.png", 
	"e-co.png", 
	"Republica de Colombia",
	"Republica Federal Presidencialistas",
	"Bogota D.C",
	47662951,
	1141748
	);
paises[2] = new Array(
	"Peru", 
	"u-pe.png", 
	"b-pe.png", 
	"e-pe.png", 
	"Republica del Perú",
	"Republica Federal Presidencialistas",
	"Lima",
	30814175,
	1285216
	);
paises[3] = new Array(
	"España", 
	"u-es.png", 
	"b-es.png", 
	"e-es.png", 
	"Reino de España",
	"Monarquíá Parlamentaria",
	"Madrid",
	47129783,
	504645
	);
paises[4] = new Array(
	"Argentina", 
	"u-ar.png", 
	"b-ar.png", 
	"e-ar.png", 
	"Republica Argentina",
	"Republica federal Democratica",
	"Buenos Aires",
	42192500,
	2780400
	);

/*
otra manera de crear elementos para array
paises[0] = "México";
paises[1] = "Colombia";
paises[2] = "Peru";
paises[3] = "Argentina";
*/

//DECLARACION DE FUNCIONES
function mostrarPaises()
{
	//alert(paises[3])
	//alert(paises[3][6]);
	//alert(paises[4].length);
	var listaPaises = "<ol>";
		for(var n=0; n<paises.length; n++)
		{
			listaPaises += "<li>" + paises[n] + "</li>";
		}
	listaPaises += "</ol>";

		/*For (var = varlorInicial; var <= valorFinal; var = var+incremento){
		 //código a ser ejecutado
		}*/
		/*listaPaises += "<li>" + paises[0] + "</li>";
		listaPaises += "<li>" + paises[1] + "</li>";
		listaPaises += "<li>" + paises[2] + "</li>";
		listaPaises += "<li>" + paises[3] + "</li>";
		listaPaises += "<li>" + paises[4] + "</li>";*/
	

	document.getElementById("paises").innerHTML = listaPaises;
}

function mostrarInfoPaises()
{
	var infoPais = "";
	for(var n=0; n<paises.length; n++)
	{
		infoPais += "<article class='pais'>";
			infoPais += "<div>";
				infoPais += "<h1>" + paises[n][0] +"</h1>";
				infoPais += "<img src='activos/" + paises[n][1] + "' />";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<img src='activos/" + paises[n][2] +"'/>";
				infoPais += "<img src='activos/" + paises[n][3] + "'/>";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<p>Nombre oficial:" + paises[n][4] + " </p>";
				infoPais += "<p>Gobierno:" + paises[n][5] + " </p>";
				infoPais += "<p>Capital:" + paises[n][6] + " </p>";
				infoPais += "<p>Habitantes:" + paises[n][7] + " </p>";
				infoPais += "<p>Territorio:" + paises[n][8] + " km<sup>2</sup>" +"</p>";
			infoPais += "</div>";
		infoPais += "</article>";
	}

	document.getElementById("paises").innerHTML = infoPais;
}

function cargaDocumento()
{
	//mostrarPaises();
	mostrarInfoPaises();
}

//ASIGNACION DE EVENTOS
window.addEventListener("load",cargaDocumento);