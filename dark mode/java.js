const button = document.getElementById('trocarTema' );
const body = document.body;
const imagem = document.getElementById('imagemNey');
const titulo = document.getElementById('tituloNey');

button.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    
    // Alterar o texto do botão conforme o tema
    if (body.classList.contains('dark-theme')) {
        imagem.src = 'style/81865188_re-rio-de-janeiro-rj-27-03-2019-nego-ney-o-menino-de-7-anos-que-tem-viralizado-por-seu.jpg';
        button.innerHTML = '<h1>Mudar para Claro</h1>';
        titulo.textContent = 'Negro Ney';
    } else {
        imagem.src = 'style/6h7kgre864c41.jpg';
        button.innerHTML = '<h1>Mudar para Escuro</h1>';
        titulo.textContent = 'Branco Ney';
    }
}); 

