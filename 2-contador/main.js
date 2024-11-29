/* ⭐⭐⭐ CONTADOR ⭐⭐⭐ */
function $(selector) {
  return document.querySelector(selector)
}

const $h1Contador = $(".contador");//0
const $buttonMasUno = $(".masUno");//+1

/*CONVERSIÓN A NUMBER*/
const $numberH1Contador = Number($h1Contador);
const $numberButtonMasUno = Number($buttonMasUno);

/*FUNCION SUMAR*/
function sumar ($numberH1Contador, $numberButtonMasUno){
  return $numberH1Contador + $numberButtonMasUno
}

/*RETORNO FUNCION*/
const retornoFuncion = sumar(0, 1);

/* EVENTO*/
$buttonMasUno.addEventListener("click", function () {
  $h1Contador.innerText = retornoFuncion
})


