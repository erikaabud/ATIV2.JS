function aplicarDesconto() {
  const codigo = prompt("Qual o código de promoção");
    const valorOriginal = parseFloat(prompt("Qual o valor do produto:"));
     let desconto = 0;

  
    switch (codigo) {
        case "DESC1":
            desconto = 0.05; 
            console.log("5% de desconto");
            break;
        case "DESC2":
            desconto = 0.10; 
            console.log("10% de desconto");
            break;
        case "DESC3":
            desconto = 0.15; 
            console.log("15% de desconto");
            break;
        case "DESC4":
            desconto = 0.20;
            console.log("20% de desconto");
            break;
        case "DESC5":
            desconto = 0.25;
            console.log("25% de desconto");
            break;
        default:
            console.log("Erro: Código promocional");
            return; 
    }
 const valorComDesconto = valorOriginal * (1 - desconto);

  console.log(`Valor original: R$ ${valorOriginal.toFixed(2)}`);
    console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`);
}
aplicarDesconto();