/* ⭐⭐⭐ CONTADOR ⭐⭐⭐ */
function $(selector) {
  return document.querySelector(selector)
}

const $h1Contador = $(".contador");//0
const $buttonMenosUno = $(".menosUno");//-1
const $buttonMasUno = $(".masUno");//+1
const $buttonMenosCinco = $(".menosCinco");//+1

let numeroVariable = 0

$buttonMasUno.addEventListener("click", function (){
  numeroVariable += 1
  $h1Contador.innerText = numeroVariable
})

$buttonMenosUno.addEventListener("click", function (){
  if (numeroVariable > 0) {
    numeroVariable -= 1
    $h1Contador.innerText = numeroVariable

  }
})

$buttonMenosCinco.addEventListener("click", function (){
  if (numeroVariable - 0) {
    numeroVariable -= 5
    $h1Contador.innerText = numeroVariable

  }
})

