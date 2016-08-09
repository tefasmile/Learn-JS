//http://json.org/json-es.html
//DECLARACION DE VARIABLES Y OBJETOS
var json = {
 	"paises": 
 	[
 		{
 			"nombre":"México", 
 			"ubicacion":"u-mx.png", 
 			"bandera":"b-mx.png", 
 			"escudo":"e-mx.png", 
 			"oficial":"Estados Unidos Mexicanos",
 			"gobierno":"Republica Federal Presidencial",
 			"capital":"Ciudad de Mexico (DF)",
 			"habitantes":119426000,
 			"territorio":1964375
 		},
 		{
 			"nombre":"Colombia", 
 			"ubicacion":"u-co.png", 
 			"bandera":"b-co.png", 
 			"escudo":"e-co.png", 
 			"oficial":"Republica de Colombia",
 			"gobierno":"Republica Federal Presidencialistas",
 			"capital":"Bogota D.C",
 			"habitantes":47662951,
 			"territorio":1141748
 		},
 		{
 			"nombre":"Peru", 
 			"ubicacion":"u-pe.png", 
 			"bandera":"b-pe.png", 
 			"escudo":"e-pe.png", 
 			"oficial":"Republica del Perú",
 			"gobierno":"Republica Federal Presidencialistas",
 			"capital":"Lima",
 			"habitantes":30814175,
 			"territorio":1285216
 		},
 		{
 			"nombre":"España", 
 			"ubicacion":"u-es.png", 
 			"bandera":"b-es.png", 
 			"escudo":"e-es.png", 
 			"oficial":"Reino de España",
 			"gobierno":"Monarquíá Parlamentaria",
 			"capital":"Madrid",
 			"habitantes":47129783,
 			"territorio":504645
 		},
 		{
 			"nombre":"Argentina", 
 			"ubicacion":"u-ar.png", 
 			"bandera":"b-ar.png", 
 			"escudo":"e-ar.png", 
 			"oficial":"Republica Argentina",
 			"gobierno":"Republica federal Democratica",
 			"capital":"Buenos Aires",
 			"habitantes":42192500,
 			"territorio":2780400
 		}
 	]
};

//DECLARACION DE FUNCIONES
function mostrarInfoPaises()
{
	//console.log(json)
	//console.log(json.paises[1]);
	//console.log(json["paises"]);
	//console.log(json.paises);
	//console.log(json.paises.length);
	//console.log(json["paises"][1]);
	//console.log(json["paises"][1].nombre);
	//console.log(json.paises[1].nombre);
	
	var infoPais = "";
	for(var n=0; n<json["paises"].length; n++)
	{
		infoPais += "<article class='pais'>";
			infoPais += "<div>";
				infoPais += "<h1>" + json["paises"][n].nombre +"</h1>";
				infoPais += "<img src='activos/" + json["paises"][n].ubicacion + "' />";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<img src='activos/" + json["paises"][n].bandera +"'/>";
				infoPais += "<img src='activos/" + json["paises"][n].escudo + "'/>";
			infoPais += "</div>";
			infoPais += "<div>";
				infoPais += "<p>Nombre oficial:" + json["paises"][n].oficial + " </p>";
				infoPais += "<p>Gobierno:" + json["paises"][n].gobierno + " </p>";
				infoPais += "<p>Capital:" + json["paises"][n].capital + " </p>";
				infoPais += "<p>Habitantes:" + json["paises"][n].habitantes + " </p>";
				infoPais += "<p>Territorio:" + json["paises"][n].territorio + " km<sup>2</sup>" +"</p>";
			infoPais += "</div>";
		infoPais += "</article>";
	}

	document.getElementById("paises").innerHTML = infoPais;
}

//Get document json
//$(selector).getJSON(url,data,success(data,status,xhr))
/*function leeJson(){
	$.getJSON("paises.json", function(result){
	    $.each(result, function(i, paises){
	        $("section").append(paises + " ");
	    });
	});
}*/


//ASIGNACION DE EVENTOS
window.addEventListener("load",mostrarInfoPaises);
//window.addEventListener("load",leeJson);



