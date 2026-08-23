/* Dados de teste (Mock Data) para o Perfil */
let usuarioDados = {
  nome: "Estudante Exemplo",
  email: "estudante@aluno.edu.br",
  matricula: "2026109923",
  curso: "Análise e Desenvolvimento de Sistemas"
};

/* Função para alternar o menu lateral */
function traitMenu() {
  const menu = document.getElementById("lado");
  const overlay = document.getElementById("overlay");

  if (menu && overlay) {
    menu.classList.toggle("ativo");
    overlay.classList.toggle("ativo");
  }
}

/* Carrega os dados nos campos ao abrir a tela */
function carregarPerfil() {
  document.getElementById("nomeUsuario").innerText = usuarioDados.nome;
  document.getElementById("matriculaUsuario").innerText = "Matrícula: " + usuarioDados.matricula;

  document.getElementById("inputNome").value = usuarioDados.nome;
  document.getElementById("inputEmail").value = usuarioDados.email;
  document.getElementById("inputMatricula").value = usuarioDados.matricula;
  document.getElementById("inputCurso").value = usuarioDados.curso;
}

/* Simula a gravação dos dados */
function salvarPerfil(event) {
  event.preventDefault();

  usuarioDados.nome = document.getElementById("inputNome").value;
  usuarioDados.email = document.getElementById("inputEmail").value;
  usuarioDados.curso = document.getElementById("inputCurso").value;

  alert("Dados salvos com sucesso (Simulação)!");
  carregarPerfil();
}

/* Executa automaticamente no carregamento */
document.addEventListener("DOMContentLoaded", carregarPerfil);