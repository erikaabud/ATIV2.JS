let peso = parseFloat (prompt(`Digite seu peso:`));
let altura = parseFloat (prompt(`Digite sua altura:`));
let imc = peso / (altura * altura);

if (imc >= 18.5 && imc < 24.9) {
    alert (`Esta saudavel\nSeu IMC: $ {imc.toFixed(2)}`)
}

else {
    alert (`Não está saudavel\nSeu IMC: $ {imc.toFixed(2)}`);
}