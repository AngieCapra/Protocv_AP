//abrir el modal
function abrirModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

//cerrar el modal
function cerrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

//evento clic para abrir el modal
var enlace = document.getElementById("contact_form");
enlace.addEventListener("click", function (event) {
  event.preventDefault();
  abrirModal();
});
