const button = document.getElementById('trocarTema' );
const body = document.body;
const imagem = document.getElementById('imagemNey');
const titulo = document.getElementById('tituloNey');

button.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    
    // Alterar o texto do botão conforme o tema
    if (body.classList.contains('dark-theme')) {
        imagem.src = 'style/lula.jpg';
        button.innerHTML = '<h1>Mudar para o lado Claro da força</h1>';
        titulo.textContent = 'Lula';
    } else {
        imagem.src = 'style/bolsonaro.jpg';
        button.innerHTML = '<h1>Mudar para o lado Escuro da força</h1>';
        titulo.textContent = 'Bolsonaro: UM fenômeno ignorado';
    }
}); 
