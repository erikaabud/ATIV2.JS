
function conferirIdade() {
let idade = prompt("Por favor, digite sua idade:");
 idade = parseInt(idade);
 if (isNaN(idade)) {
        alert("Por favor, insira um número válido para a idade.");
        return;
    }
 if (idade < 18) {
        alert("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
        alert("Você é adulto.");
    } else {
        alert("Você é idoso.");
    }
}
conferirIdade();