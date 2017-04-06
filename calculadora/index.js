//agreaga al codigo un enlace al main.js
const rq = require('electron-require');
const main = rq.remote('./main.js')
var botonesNumero = ["btn00","btn01","btn02","btn03","btn04","btn05","btn06","btn07","btn08","btn09"];
var botonesOperador=["btnSumar","btnRestar","btnMultiplicar","btnDividir"];
function numeros() {

}

//asignacion de eventos a los botones de numeros

for (var i = botonesNumero.length;i++) {
	document.getElementByID(botonesNumero[i]).addEventListener('clcik',numeros);
}
//asignacion de eventos a los botnoes del operador
for(var i=0;i<botonesOperador.length;i++){
	document.getElementByID(botonesOperador[i]).addEventListener('click',opreador);
}
//evento.getElement
document.getElementByID("btnIgual");
document.getElementByID('btn00').addEventListener('click',numeros);