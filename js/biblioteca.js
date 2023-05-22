//-----==Variáveis==-----//
const lista = document.querySelector(".lista");
const cabecalhoGen = document.querySelectorAll(".cabecalho");

//-----==Eventos==-----//
cabecalhoGen.forEach((section) => {
    section.addEventListener("click", abreLista);
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