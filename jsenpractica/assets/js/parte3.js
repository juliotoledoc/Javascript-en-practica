let resultado = document.querySelector(".resultado");
let btnsumar = document.querySelector("#btn-sumar");
let btnrestar = document.querySelector("#btn-restar");

btnsumar.addEventListener("click", function additionFx() {
  let valor1 = document.querySelector("#valor1").value;
  let valor2 = document.querySelector("#valor2").value;
  let additionResult = parseInt(valor1) + parseInt(valor2);
  document.querySelector(
    ".resultado"
  ).innerHTML = `El resultado de la suma es: ${additionResult}`;
});

btnrestar.addEventListener("click", function substractionFx() {
  let valor1 = document.querySelector("#valor1").value;
  let valor2 = document.querySelector("#valor2").value;
  let substractionResult = parseInt(valor1) - parseInt(valor2);
  if (substractionResult < 0) {
    substractionResult = 0;
  }
  document.querySelector(
    ".resultado"
  ).innerHTML = `El resultado de la resta es: ${substractionResult}`;
});