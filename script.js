// Selecionamos todos os botões de uma vez
const botoes = document.querySelectorAll('.btn-saiba-mais');

botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // 'this' refere-se ao botão que acabou de ser clicado
        // Buscamos a bio que está dentro do mesmo card que o botão
        const cardInfo = this.parentElement;
        const bio = cardInfo.querySelector('.bio');

        // Lógica de alternar (Toggle)
        if (bio.style.display === 'block') {
            bio.style.display = 'none';
            this.textContent = 'saiba mais';
        } else {
            // Opcional: fechar outras bios abertas antes de abrir esta
            fecharTodasBios(); 
            
            bio.style.display = 'block';
            this.textContent = 'Fechar';
        }
    });
});

function fecharTodasBios() {
    document.querySelectorAll('.bio').forEach(b => {
        b.style.display = 'none';
    });
    document.querySelectorAll('.btn-saiba-mais').forEach(btn => {
        btn.textContent = 'saiba mais';
    });
}