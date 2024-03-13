const usuario = JSON.parse(localStorage.getItem("usuario"));
const fotoHeader = document.getElementById("foto-header");


fotoHeader.src = usuario[0].foto ? usuario[0].foto : "./img/Usuario.svg";

