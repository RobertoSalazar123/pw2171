const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");}

var buscarpersonaje = function(){
	var personaje =$("#txtpersonaje").val();
	var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
	var cantidadcomics=0
	var cadenacomics=""
	if(personaje ==""){
		alert("ingrese el personaje")
		$("#txtpersonaje").focus();
		return
	}
	url =url+personaje;
	$.ajax({
		dataType:"json",
		url:url,
		success:function(response){
           if(response.code==200){
           	$("#imgfoto").show("slow");
           	$("#imgfoto").attr("src",response.data.results[0].thumbnail.path+"."+
           		                     response.data.results[0].thumbnail.extension)
           	$("#txtnombre").html(response.data.results[0].name)
           	if(response.data.results[0].description!=""){
           		$("#txtdescripcion").html("<b>Descripcion:<b>"+response.data.results[0].description)
           	}
           	cantidadcomics=response.data.results[0].comics.returned;
           	for(var i=0;i<cantidadcomics;i++){
           		cadenacomics+=response.data.results[0].comics.items[i].name+"<br>"
           	}
           	$("#txtcomics").html(cadenacomics);
           }
		}
	})
}
//posiciona el cursor dentro del cuadro de texto
$("#txtpersonaje").focus();
//evento del boton btnbuscar-click
$("#btnbuscar").on("click",buscarpersonaje);