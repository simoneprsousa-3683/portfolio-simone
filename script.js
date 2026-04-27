
// Validação do formulário de contato : Verifica preenchimento, formato de e-mail e simula o envio. 
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Impede o comportamento padrão de recarregar a página
    event.preventDefault();

    // Captura dos valores
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // 1. Validação: Verifica se todos os campos estão preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    // 2. Validação: Verifica se o e-mail possui um formato válido
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, informe um e-mail válido (exemplo: usuario@dominio.com).");
        return;
    }

    // 3. Simulação de envio: Limpa os campos e exibe mensagem de sucesso
    alert("Mensagem enviada com sucesso!");
    this.reset(); 
});


document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});