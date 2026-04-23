function revelar() {
    const imagem = document.querySelector('.card-img-top');

    const spanNome = document.getElementById('Nome');
    const spanRank = document.getElementById('Rank');
    const spanData = document.getElementById('Data_Nas');
    const spanAltura = document.getElementById('Alutra'); 
    const spanPosicao = document.getElementById('Posição '); 

   
    if (imagem) {
        imagem.src = 'img/_vinicius_junior.png';
        imagem.alt = 'Vinícius Júnior';
    }

    if (spanNome) spanNome.innerHTML = 'Vinícius José Paixão de Oliveira Júnior <span id="Rank" class="badge text-bg-success">9,5</span>';
    if (spanData) spanData.innerText = "12/07/2000 (25 anos)";
    if (spanAltura) spanAltura.innerText = "1,76 m";
    if (spanPosicao) spanPosicao.innerText = "Ponta-esquerda / Atacante";

    const placeholders = document.querySelectorAll('.placeholder');
    placeholders.forEach(el => {
        el.classList.remove('placeholder');
        el.classList.add('card-text');
    });
    const glows = document.querySelectorAll('.placeholder-glow');
    glows.forEach(el => {
        el.classList.remove('placeholder-glow');
    });
}