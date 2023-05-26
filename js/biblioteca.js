//-----==Variáveis==-----//
const lista = document.querySelector(".lista");
const cabecalhoGen = document.querySelectorAll(".cabecalho");
const liGen = document.querySelectorAll(".lista li");

//-----==Eventos==-----//
cabecalhoGen.forEach((section) => {
    section.addEventListener("click", abreLista);
    section.addEventListener("click", alugarAlugado);
});

//-----==Funções==-----//
function abreLista() {
  const listaClicada = this.nextElementSibling;
  
  // Remover a classe "show" de todas as listas, exceto da lista clicada
  cabecalhoGen.forEach((section) => {
    const lista = section.nextElementSibling;
    if (lista !== listaClicada) {
      lista.classList.remove("show");
    }
  });
  
  // Alternar a classe "show" apenas na lista clicada
  listaClicada.classList.toggle("show");
}

//Randomicamente Alugado e Disponível
function alugarAlugado(){
  liGen.forEach(li => {
    if (li.childElementCount > 0) {
      li.removeChild(li.lastChild);
    }

    const button = document.createElement("button");
    const span = document.createElement("span");

    const aOUd = Math.ceil(Math.random() * 2);

    if (aOUd == 1) {
      button.textContent = "Alugar";
      li.appendChild(button);
    }
    else{
      span.textContent = "Alugado";
      li.appendChild(span);
    }
  });
}