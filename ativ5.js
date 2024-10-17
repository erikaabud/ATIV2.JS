function obterDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Por favor, insira um número de 1 a 7";
    }
}

const numero = parseInt(prompt("Digite um número de 1 a 7"));
const diaDaSemana = obterDiaDaSemana(numero);
alert(diaDaSemana);
