/* Función original

function pintar() {
    ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar); 

*/

/* Función anónima */
const ele = document.getElementById("ele1")

ele.addEventListener("click", function () {
    ele.style.backgroundColor = 'yellow'
})