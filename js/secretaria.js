//VARIÁVEIS
//Cards
const cardGen = document.querySelectorAll("section");
const cardContato = document.querySelector(".cardContato");
const cardObjetivos = document.querySelector(".cardObjetivos");
const cardPerguntas = document.querySelector(".cardPerguntas");
//Voltar
const voltar = document.querySelector(".voltar");
const voltarC = document.querySelector(".cardContato .voltar");
const voltarO = document.querySelector(".cardObjetivos .voltar");
const voltarP = document.querySelector(".cardPerguntas .voltar");
//Title do Card
const contatoTitle = document.querySelector(".title");
//Buttons
const btnGen = document.querySelector("button");
const btnContainer = document.querySelector(".btn-container");
const btnContato = document.querySelector(".btnContato");
const btnObjetivos = document.querySelector(".btnObjetivos");
const btnPerguntas = document.querySelector(".btnPerguntas");
//conteudo oculto e seu container (todos os cards)
const contatoConteudoOcultoContainer = document.querySelector(".conteudo");
const contatoConteudoOculto = document.querySelector(".cOculto");
const objetivosConteudoOcultoContainer = document.querySelector(".conteudo");
const objetivosConteudoOculto = document.querySelector(".cOculto");
//Container do formulario
const formContato = document.querySelector(".formContato");
//Conteúdo completo (Objetivos e Perguntas Frequentes)
const detalhesObjetivos = document.querySelector(".detalhesObjetivos");
const perguntas = document.querySelector(".perguntas")
//EVENTOS
//Hover
/*Tem que fazer assim pois, ao usar .querySelectorAll, a constante vira uma lista de elementos, 
sendo assim não é possivel associar à um evento, então precisa selecionar elementos um a um*/
cardGen.forEach((section) => {
    section.addEventListener("mouseover", mostraCCO);
    section.addEventListener("mouseout", escondeCCO);
})
//Abrir Card Completo
btnContato.addEventListener("click", function () {
    abreCard(cardContato);
});
btnObjetivos.addEventListener("click", function () {
    abreCard(cardObjetivos);
    btnObjetivos.style.display = "none";
    voltarO.style.display = "block";
    detalhesObjetivos.style.display = "block";
});
btnPerguntas.addEventListener("click", function () {
    abreCard(cardPerguntas);
    btnPerguntas.style.display = "none";
    voltarP.style.display = "block";
    perguntas.style.display = "block";
});

//Fechar Card Completo
voltarC.addEventListener("click", function () {
    fechaCard(cardContato);
});
voltarO.addEventListener("click", function () {
    fechaCard(cardObjetivos);
    voltarO.style.display = "none";
    btnObjetivos.style.display = "block";
    detalhesObjetivos.style.display = "none";
});
voltarP.addEventListener("click", function () {
    fechaCard(cardPerguntas);
    voltarP.style.display = "none";
    btnPerguntas.style.display = "block";
    perguntas.style.display = "none";
});

//FUNCTIONS
//Mostrar e esconder conteúdo oculto do card (modo padrão)
function mostraCCO() {
    this.querySelector(".cOculto").style.display = "block";
}
function escondeCCO() {
    this.querySelector(".cOculto").style.display = "none";
}

//Card Completo
function abreCard(card) {
    //Quando o card estiver ativo, os event de mouseover/out são desativados
    card.removeEventListener("mouseover", mostraCCO);
    card.removeEventListener("mouseout", escondeCCO);

    voltar.style.display = "inline";
    btnContainer.style.display = "none";

    if (card == cardContato) {
        card.classList.toggle("aberto");
        cardObjetivos.classList.toggle("fechado");
        cardPerguntas.classList.toggle("fechado");

        //Ajeitando altura qnd form aparece
        formContato.classList.toggle("aberto");
        contatoTitle.style.height = "10%"
        contatoConteudoOcultoContainer.style.height = "20%";
    }
    else if (card == cardObjetivos) {
        cardContato.classList.toggle("fechado");
        card.classList.toggle("aberto");
        cardPerguntas.classList.toggle("fechado")

        //Ajeitando altura qnd form aparece
        detalhesObjetivos.classList.toggle("aberto");
        objetivosConteudoOcultoContainer.style.height = "20%";
    }
    else {
        cardContato.classList.toggle("fechado");
        cardObjetivos.classList.toggle("fechado");
        card.classList.toggle("aberto");
    }
}

function fechaCard(card) {
    //Quando o card fechar dnv, os event de mouseover/out vão voltar
    card.addEventListener("mouseover", mostraCCO);
    card.addEventListener("mouseout", escondeCCO);

    voltar.style.display = "none";
    btnContainer.style.display = "flex";

    if (card == cardContato) {
        card.classList.toggle("aberto");
        cardObjetivos.classList.toggle("fechado");
        cardPerguntas.classList.toggle("fechado");

        //Ajeitando altura qnd form some
        formContato.classList.toggle("aberto");
        contatoTitle.style.height = "20%"
        contatoConteudoOcultoContainer.style.height = "50%";
    }
    else if (card == cardObjetivos) {
        cardContato.classList.toggle("fechado");
        card.classList.toggle("aberto");
        cardPerguntas.classList.toggle("fechado");
    }
    else {
        cardContato.classList.toggle("fechado");
        cardObjetivos.classList.toggle("fechado");
        card.classList.toggle("aberto");
    }
};
