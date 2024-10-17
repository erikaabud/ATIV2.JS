let idade = parseInt(prompt(`Digite sua idade`));
switch (true) {
    case idade <= 12:
        alert(`Criança`);
        break;

    case idade <= 17:
        alert(`Adolescente`);
        break;

    case idade >= 18 && idade <= 59:
        alert(`Adulto`);
        break;

    case idade >= 60:
        alert(`Idoso`);
        break;
}