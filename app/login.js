const formulario = document.querySelector("[data-formulario]")
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagemErroLogin = document.getElementById("mensagem-erro-login")
const cadastro = JSON.parse(localStorage.getItem("cadastro") || "[]");


formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    cadastro[0].email == email.value && cadastro[0].senha == senha.value 
    ? window.location.href = "./home.html" 
    : mensagemErroLogin.textContent = 'O email ou senha então incorretos.';  
})


