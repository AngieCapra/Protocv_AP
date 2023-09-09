//abrir el modal
function abrirModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}

//cerrar el modal
function cerrarModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

//evento clic para abrir el modal
let enlace = document.getElementById("contact_form");
enlace.addEventListener("click", function (event) {
  event.preventDefault();
  abrirModal();
});
