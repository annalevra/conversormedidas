function Cadastrar(event) {
    event.preventDefault(); 

    var nome = document.getElementById("nome");

    if (nome.value && cpf.value !== "") {
        alert(' Cadastro realizado com sucesso!');
    }
}