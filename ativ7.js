function qualIdade(idade) {
    switch (true) {
        case (idade >= 0 && idade <= 12):
            console.log(`Criança`);
            break;
        case (idade >= 13 && idade <= 17):
            console.log(`Adolescente`);
            break;
        case (idade >= 18 && idade <= 64):
            console.log(`Adulto`);
            break;
        case (idade >= 65):
            console.log(`Idoso`);
            break;
        default:
            console.log(`Idade inválida`);
            break;
    }
}
const idade = parseInt(prompt("Digite a sua idade:"));
qualIdade(idade);