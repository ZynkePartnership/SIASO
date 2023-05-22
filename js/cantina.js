//-----==VARIÁVEIS==-----//
const listaHorarios = document.querySelector(".horarios");
const comidaDoDia = document.querySelector(".comida span");
const sobremesaDoDia = document.querySelector(".sobremesa span");
const listaSalgados = document.querySelector(".listaSalgados");
const listaBebidas = document.querySelector(".listaBebidas");

window.usuarioAtual;

//Criando Arrays de comida
const horarios = ["6:30 - 7:00", "9:20 - 10:30", "12:30 - 13:30", "14:20 - 15:35", "17:00 - 17:30", "18:30 - 19:00", "20:30 - 21:30"];
const padrao = ["Arroz e Feijão", "Feijoada", "Arroz à Grega", "Arroz à Piamontese"];
const mistura = ["Omelete", "Ovo Frito", "Ovo Cozido", "Linguiça", "Carne Moída", "polenta", "Polenta Frita", "Farofa", "Lasanha", "Purê de Batata", "Batata Cozida", "Batata Frita", "Banana Empana", "Tilápia Assada", "Tilápia Frita", "Atum", "Frango Assado", "Frango Frito", "Frango Empanado"];
const sobremesa = ["Pudim", "Banana", "Maça", "Bolo", "Mousse de Limão", "Mouse de Maracujá", "Mousse de chocolate", "Bolacha", "Picolé", "Manga", "Salada de Fruta"];
const salgados = ["Coxinha", "Pão de Queijo", "Quibe", "Enroladinho de Salsicha", "Presunto e queijo", "Pão de Batata"];
const bebidas = ["Água", "Suco de Laranja", "Suco de Uva", "Suco de Acerola", "Suco de Goiaba", "Suco de Melancia", "Suco de Caju", "Coca Cola 300ml", "Coca Cola 1L", "Coca Cola 2L", "Guaraná 300ml", "Guaraná 1L", "Guaraná 2L"]

//Criando um <li> para cada item da array horarios
horarios.forEach((horario) => {
  //Cria um <li>
  const li = document.createElement("li");

  //Coloca dentro do <li> o item do horarios
  li.textContent = horario;

  //Coloca o <li> criado dentro da <ul>
  listaHorarios.appendChild(li);
});

//-----==EVENTOS==-----//
window.addEventListener("load", escolhendoAlimento);

//-----==FUNÇÕES==-----//
function escolhendoAlimento() {
    //Escolhendo as comidas

    //Almoço
    const padraoDoDia = padrao[Math.floor(Math.random() * padrao.length)];
    const misturaDoDia = mistura[Math.floor(Math.random() * mistura.length)];
    const sobremesaEscolhida = sobremesa[Math.floor(Math.random() * sobremesa.length)];

    //Salgado/Bebida
    const salgadoDoDia = salgados[Math.floor(Math.random() * salgados.length)];
    const bebidaDoDia = bebidas[Math.floor(Math.random() * bebidas.length)]

    //Concatenando comida padrão e Mistura
    const comidaEscolhida = padraoDoDia.concat("; Mistura: ", misturaDoDia);

    salgados.forEach((salgado) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.textContent = salgado;
        span.textContent = "R$ 7,50"
        listaSalgados.appendChild(li);
        li.appendChild(span);

        if (salgado === salgadoDoDia) {
            li.classList.add("salgadoEscolhido");
            span.textContent = "R$ 6,99"
        }
    });

    bebidas.forEach((bebida) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.textContent = bebida;
        span.textContent = "R$ 6,00";
        listaBebidas.appendChild(li);
        li.appendChild(span);

        if (bebida === bebidaDoDia) {
            li.classList.add("bebidaEscolhida");
            span.textContent = "R$ 4,99";
        }
    });

    comidaDoDia.textContent = comidaEscolhida;
    sobremesaDoDia.textContent = sobremesaEscolhida;
}