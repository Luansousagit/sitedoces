document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FILTRO DE BUSCA (HOME)
    const inputBusca = document.getElementById('inputBusca');
    if (inputBusca) {
        inputBusca.addEventListener('keyup', () => {
            const termo = inputBusca.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                const texto = card.innerText.toLowerCase();
                card.style.display = texto.includes(termo) ? "block" : "none";
            });
        });
    }

    // 2. CALCULADORA DE PORÇÕES (RECEITA)
    const porcoesInput = document.getElementById('porcoes');
    if (porcoesInput) {
        const ingredientes = document.querySelectorAll('.lista-ingredientes li');
        
        porcoesInput.addEventListener('input', () => {
            const novaPorcao = parseInt(porcoesInput.value) || 1;
            const porcaoBase = parseInt(porcoesInput.getAttribute('data-base-porcao'));

            ingredientes.forEach(li => {
                const baseQtd = parseFloat(li.getAttribute('data-base-qtd'));
                const unidade = li.getAttribute('data-unidade');
                const nome = li.getAttribute('data-nome');
                
                const resultado = (baseQtd / porcaoBase) * novaPorcao;
                li.innerHTML = `<strong>${resultado.toFixed(1)} ${unidade}</strong> ${nome}`;
            });
        });
    }

    // 3. CHECKLIST INTERATIVO
    const checks = document.querySelectorAll('.lista-preparo input');
    checks.forEach(check => {
        check.addEventListener('change', () => {
            check.parentElement.classList.toggle('completed');
        });
    });
});