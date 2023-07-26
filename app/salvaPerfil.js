const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const perfil = [{
        "nome": e.target.elements["nome"].value,
        "telefone": e.target.elements["telefone"].value,
        "cidade": e.target.elements["cidade"].value,
        "sobre": e.target.elements["sobre"].value,
        "foto": e.target[0].elements[0].previousElementSibling.firstElementChild.src
    }]

    localStorage.setItem("usuario", JSON.stringify(perfil))

    window.location.href = './home.html'
})


const cadastro = JSON.parse(localStorage.getItem("cadastro"));

const inputNome = document.getElementById("nome")
inputNome.value = cadastro[0].nome;


const usuario = JSON.parse(localStorage.getItem("usuario"));
const srcFoto = localStorage.getItem("foto");

usuario.map((e) => {
    const inputTelefone = document.getElementById("telefone");
    inputTelefone.value = e.telefone;

    const inputCidade = document.getElementById("cidade");
    inputCidade.value = e.cidade;

    const inputSobre = document.getElementById("sobre");
    inputSobre.value = e.sobre;

    const inputImagem = document.getElementById("imagem");
    inputImagem.src = e.foto;

    const imagemHeader = document.getElementById("foto-header");
    imagemHeader.src = e.foto ? e.foto : "./img/Usuario.svg";
})




