function mostrarTabela() {
    const local = document.getElementById('espaco-da-tabela');

    if (local && local.innerHTML === "") {
        
        const imagem = document.createElement('img');
        
        imagem.src = 'Tabela_Jogos.png'; 
        imagem.alt = 'Tabela de Jogos da Copa 2026';
        
        imagem.style.maxWidth = '100%';
        imagem.style.height = 'auto';
        imagem.style.marginTop = '20px';
        imagem.style.borderRadius = '10px';
        imagem.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.3)';

        local.appendChild(imagem);
        
        const botao = document.getElementById('btnExibir');
        if (botao) {
            botao.innerText = "Tabela Carregada!";
        }
    }
}
