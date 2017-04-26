const rq = require('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");
function datosRandom(){
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	$("#txtNombre").html(data.results[0].name.first+" "+data.results[0].name.last)
  	$("#imgFoto").attr("src",data.results[0].picture.large)
  	$("#txtTitle").html(data.results[0].name.title)
  	$("#txtGenero").html(data.results[0].name.gender)
  	$("#txtCalle").html(data.results[0].location.street)
  	$("#txtCiudad").html(data.results[0].location.city)
  	$("#txtEstado").html(data.results[0].location.state)
  	$("#txtCodigoP").html(data.results[0].location.postcode)
  },
  error(a,b,c){
  	alert("sin internet o sin servidor");
  }
});
}
$("#btnInfo").on("click",datosRandom);
