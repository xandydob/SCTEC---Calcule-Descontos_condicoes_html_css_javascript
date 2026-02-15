function calcularPrecoFinal() {
    // 1. Captura dos valores
    let precoOriginal = parseFloat(document.getElementById('preco').value);
    let porcentagemDesconto = parseFloat(document.getElementById('desconto').value);

    // 2. Validação com IF-ELSE (Requisito 5)
    if (isNaN(precoOriginal) || isNaN(porcentagemDesconto)) {
        alert("Por favor, preencha ambos os campos com valores numéricos.");
        return;
    }

    if (precoOriginal <= 0 || porcentagemDesconto < 0) {
        alert("Erro: O preço deve ser maior que zero e o desconto não pode ser negativo.");
        return;
    }

    if (porcentagemDesconto > 100) {
        alert("Aviso: O desconto não pode ser superior a 100%.");
        return;
    }

    // 3. Cálculos (Requisito 4)
    let valorDesconto = precoOriginal * (porcentagemDesconto / 100);
    let precoFinal = precoOriginal - valorDesconto;

    // 4. Exibição dos resultados (Requisito 6)
    let mensagem = `--- Resumo da Compra ---
Preço Original: R$ ${precoOriginal.toFixed(2)}
Valor do Desconto: R$ ${valorDesconto.toFixed(2)}
Preço Final: R$ ${precoFinal.toFixed(2)}`;

    // Exibe no Console
    console.log(mensagem);
    
    // Exibe no Alert para o usuário
    alert(mensagem);
}