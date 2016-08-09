/*Obtener información externa de javascript con JSON*/


//DECLARACION DE FUNCIONES
function mostrarInfoPaises()
{
	
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


//ASIGNACION DE EVENTOS
window.addEventListener("load",mostrarInfoPaises);
//window.addEventListener("load",leeJson);



