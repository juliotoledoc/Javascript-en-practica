let form = document.getElementById("formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiarErrores();
  let nombre = document.querySelector("#nombre").value;
  let asunto = document.querySelector("#asunto").value;
  let mensaje = document.querySelector("#mensaje").value;

  let resultado = validar(nombre, asunto, mensaje);
  if (resultado == true) {
    success();
  }
});

function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function success() {
  document.querySelector(".resultado").innerHTML = "Mensaje enviado con exito.";
}

function validar(nombre, asunto, mensaje) {
  let pasamosLaValidacion = true;
  let validacionNombre = /[a-zA-Z]/gim;

  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
      "El nombre es requerido.";
    pasamosLaValidacion = false;
  }
  if (validacionNombre.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML =
      "El asunto es requerido.";
    pasamosLaValidacion = false;
  }
  if (validacionNombre.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "El mensaje es requerido.";
    pasamosLaValidacion = false;
  }
  return pasamosLaValidacion;
}