
function verificarIdade() {

    const idade = parseInt(prompt("Digite sua idade:"));

    
    if (idade >= 18) {
        alert("Você pode dirigir");
    } else {
        alert("Você não pode dirigir");
    }
}


verificarIdade();