// Função chamada quando o formulário de contato é enviado
function enviarWhats(event) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Captura o valor digitado no campo de nome
    const nome = document.getElementById('nome').value;

    // Captura o valor digitado no campo de mensagem
    const mensagem = document.getElementById('mensagem').value;

    // Número de telefone para o qual a mensagem será enviada via WhatsApp
    const telefone = '5531991726831'; // Exemplo: código do país + DDD + número

    // Cria a mensagem que será enviada no WhatsApp
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;

    // Codifica a mensagem para que seja válida em uma URL (ex: espaços viram %20)
    const msgFormatada = encodeURIComponent(texto);

    // Monta a URL da API do WhatsApp com o número e a mensagem
    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

    // Exibe a URL no console (para fins de teste ou depuração)
    console.log(url);

    // Abre a URL em uma nova aba do navegador, iniciando o WhatsApp com a mensagem
    window.open(url, '_blank');
}
