/* Função que oculta e mostra a senha ao usuário */
function mostrarSenha(id, botao) {
    const senha = document.getElementById(id);
    const imagem = botao.querySelector("img");

    if (senha.type === "password") {
        senha.type = "text";
        imagem.src = "../img/olho-fechado.png";
    } else {
        senha.type = "password";
        imagem.src = "../img/olho.png";
    }
}