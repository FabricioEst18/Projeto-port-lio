function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5531991726831';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

    console.log(url);

    window.open(url, '_blank');
}
