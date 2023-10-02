function converter(event) {
    event.preventDefault(); 
    const metrosInput = document.getElementById("metros");
    const resultadoElement = document.getElementById("resultado");
    
    // Verifica se o campo "metros" está vazio ou não é um número válido
    const metrosValue = metrosInput.value.trim(); // Remove espaços em branco do início e do fim
    if (!metrosValue) {
        resultadoElement.textContent = "Insira um valor válido";
        return;
    }

    const metros = parseFloat(metrosValue);
    
    if (isNaN(metros)) {
        resultadoElement.textContent = "Insira um valor válido";
        return;
    }

    const unidade = document.getElementById("unidade").value;
    let resultado;

    switch (unidade) {
        case "centímetros":
            resultado = metros * 100;
            break;
        case "quilômetros":
            resultado = metros * 0.001;
            break;
        case "milhas":
            resultado = metros * 0.000621371;
            break;
        case "pés":
            resultado = metros * 3.28084;
            break;
        case "polegadas":
            resultado = metros * 39.3701;
            break;
        case "jardas":
            resultado = metros * 1.09361;
            break;
        default:
            resultado = "🚨 Selecione uma unidade de medida válida!";
    }

    resultadoElement.textContent = `${resultado} ${unidade}`;
}
