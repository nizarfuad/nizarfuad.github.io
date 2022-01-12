var Modal = document.getElementById("sdss");
var ModalButton = document.getElementById("history");

ModalButton.addEventListener("shown.bs.modal", function () {
  Modal.focus();
});
