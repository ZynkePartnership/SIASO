const linkGen = document.querySelectorAll(".link");

const telaSecretaria = document.getElementById("secretaria");
const secretariaLink = document.querySelector(".secretariaLink");

const telaNotas = document.getElementById("notas");
const notasLink = document.querySelector(".notasLink");

const telaPresenca = document.getElementById("presenca");
const presencaLink = document.querySelector(".presencaLink");

const telaContato = document.getElementById("contato");
const contatoLink = document.querySelector(".contatoLink");

//-----==Eventos==-----//
//Voltar pra Secretaria
secretariaLink.addEventListener("click", function () {
    telaNotas.style.display = "none";
    telaPresenca.style.display = "none";
    telaContato.style.display = "none";
})
//Abrir Notas
notasLink.addEventListener("click", function () {
    telaNotas.style.display = "block";
    telaPresenca.style.display = "none";
    telaContato.style.display = "none";
})
//Abrir Presença
presencaLink.addEventListener("click", function () {
    telaNotas.style.display = "none"
    telaPresenca.style.display = "block";
    telaContato.style.display = "none";
})
//Abrir Contato
contatoLink.addEventListener("click", function () {
    telaNotas.style.display = "none"
    telaPresenca.style.display = "none";
    telaContato.style.display = "block";
})