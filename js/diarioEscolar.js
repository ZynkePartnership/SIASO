// Obter todos os links
const linkGen = document.querySelectorAll('.link');

// Adicionar evento de clique a cada link
linkGen.forEach(link => {
    link.addEventListener('click', function(event) {
        // Impedir o comportamento padrão do link
        event.preventDefault();

        // Obter o id do link
        const telaEscolhida = link.getAttribute('href');

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