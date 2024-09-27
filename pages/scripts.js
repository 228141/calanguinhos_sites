console.log("Script FAQ carregado com sucesso!");

// scripts.js

// Navegação suave entre as seções
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// scripts.js

// Captura do formulário de contato
const formContato = document.getElementById('form-contato');
const statusEnvio = document.getElementById('status-envio');

// Função de validação e envio do formulário
formContato.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    // Validação simples
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        statusEnvio.textContent = 'Por favor, preencha todos os campos.';
        statusEnvio.style.color = 'red';
    } else if (!validateEmail(email)) {
        statusEnvio.textContent = 'Por favor, insira um email válido.';
        statusEnvio.style.color = 'red';
    } else {
        // Sucesso: enviar a mensagem (pode ser integrado com um backend)
        statusEnvio.textContent = 'Mensagem enviada com sucesso!';
        statusEnvio.style.color = 'green';
        formContato.reset(); // Limpa o formulário após o envio
    }
});

// Função de validação de email simples
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Seleciona todos os botões de perguntas da FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

// Itera sobre cada botão de pergunta para adicionar um evento de clique
faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        // Seleciona a resposta associada (próximo elemento)
        const answer = question.nextElementSibling;

        // Verifica se a resposta está oculta ou visível e altera o estilo
        if (answer.style.display === 'block') {
            answer.style.display = 'none'; // Ocultar a resposta
        } else {
            answer.style.display = 'block'; // Mostrar a resposta
        }

        // Alterna o ícone entre + e -
        const icon = question.querySelector('.toggle-icon');
        if (icon.textContent === '+') {
            icon.textContent = '-'; // Alterar para -
        } else {
            icon.textContent = '+'; // Alterar para +
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formOrcamento = document.getElementById("form-orcamento");

    formOrcamento.addEventListener("submit", function (event) {
        event.preventDefault();

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const tipoServico = document.getElementById("tipo-servico").value;
        const orcamento = document.getElementById("orcamento").value;
        const mensagem = document.getElementById("mensagem").value;

        // Simula o envio e exibe uma mensagem de confirmação
        const statusOrcamento = document.getElementById("status-orcamento");
        statusOrcamento.innerText = `Obrigado, ${nome}! Recebemos sua solicitação e entraremos em contato em breve.`;
        statusOrcamento.style.color = "green";

        // Limpa os campos do formulário após o envio
        formOrcamento.reset();
    });
});
