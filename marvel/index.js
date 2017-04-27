const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");}

var buscarpersonaje = function(){
	
}
$("#txtpersonaje").focus();
//evento del boton btnbuscar-click
$("#btnbuscar").on("click",buscarpersonaje);