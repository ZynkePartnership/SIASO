// Obter todos os links
const linkGen = document.querySelectorAll('.link');
// Variáveis
const tableNotas = document.querySelector("#tableNotas tbody");
const tablePresenca = document.querySelector("#tablePresenca tbody");
const materias = ["Português", "Redação", "História", "Geografia", "Matemática", "Física", "Química", "Biologia"];
const aulasBimestre = 50;

//Eventos
window.addEventListener("load", function () {
    valoresPresenca();
    valoresNotas();
});

// Adicionar evento de clique a cada link
linkGen.forEach(link => {
    link.addEventListener('click', function (event) {
        // Impedir o comportamento padrão do link
        event.preventDefault();

        // Obter o id do link
        const telaEscolhida = link.getAttribute('href');

        if (telaEscolhida == document.getElementById("diarioEscolar")) {
            document.querySelector(".diarioEscolar ul").classList.add("show");
        }
        // Remover a classe "show" de todos os elementos section
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('show');
        });

        // Adicionar a classe "show" ao elemento section correspondente ao id do link
        const targetSection = document.querySelector(telaEscolhida);
        if (targetSection) {
            targetSection.classList.add('show');
        }
    });
});

function valoresNotas() {

    materias.forEach(materia => {
        const tr = document.createElement("tr");
        tableNotas.appendChild(tr);

        for (let i = 0; i < 18; i++) {
            const td = document.createElement("td");

            const nota = parseFloat((Math.random() * 10 + 0.1).toFixed(1));

            if (i == 0) {
                td.textContent = materia;
                tr.appendChild(td);
            }
            else if (i % 3 != 0) {
                td.textContent = nota;
                tr.appendChild(td);
            } else {
                td.textContent = 9;
                tr.appendChild(td);
            }

        }
    });
}

function valoresPresenca() {

    materias.forEach(materia => {
        const tr = document.createElement("tr");
        tablePresenca.appendChild(tr);

        for (let i = 0; i < 14; i++) {
            const td = document.createElement("td");

            const presenca = Math.floor(Math.random() * 35 + 15);

            if (i == 0) {
                td.textContent = materia;
                tr.appendChild(td);
            }
            else if (i == 13) {
                td.textContent = Math.floor(Math.random() * 160 + 40);
                tr.appendChild(td);
            }
            else if ((i + 2) % 3 == 0) {
                td.textContent = presenca;
                tr.appendChild(td).classList.add("aulaIda" + materia);
            }
            else if ((i + 2) % 3 < 2){
                td.textContent = Math.floor(Math.random() * 5 + 5);
                tr.appendChild(td).classList.add("aulaFaltada" + materia);
            }
            else{
                td.textContent = Math.floor(Math.random() * 5);
                tr.appendChild(td);
            }
        }
    });
}