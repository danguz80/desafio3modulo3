/* Función original 

function pintar() {
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar); 
*/


/* Función anónima 
const ele = document.getElementById("ele1")

ele.addEventListener("click", function () {
    ele.style.backgroundColor = 'yellow'
})
*/

/* Función con color "yellow" de argumento, al dejarlo sin argumento por defecto al hacer click el background se cambia a "green"  */

function pintar(color = "green") {
    ele.style.backgroundColor = color
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    pintar("yellow")
}); 

/* Misma función anterior pero sin argumento, con esto por defecto al hacer click el color de fondo será verde

function pintar(color = "green") {
    ele.style.backgroundColor = color
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    pintar()
}); 

*/