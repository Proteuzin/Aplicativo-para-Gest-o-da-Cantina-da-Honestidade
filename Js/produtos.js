let preco = [
  "preco",
  "preco",
  "preco",
  "preco",
  "preco",
  "preco",
  "preco",
  "preco",
  "preco",
];

let nome = [
  "nome",
  "nome",
  "nome",
  "nome",
  "nome",
  "nome",
  "nome",
  "nome",
  "nome",
];

let img = [
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
  "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp",
];

function card() {
  let cards = document.querySelector("#primeiro");

  for (let i = 0; i < nome.length; i++) {
    cards.innerHTML += `
    <div class="DivCard">
        <img src="${img[i]}" class="fotoCard">
        <p class="texto">${nome[i]}</p>
        <p class="preco">${preco[i]}</p>
        <button class="butcard">Adicionar</button>
    </div>
`;
  }
}

card();
/* Manipulação dos painéis */
const carteira = document.getElementById("saldo");
const carrinho = document.getElementById("carrinho");
const cards = document.getElementById('primeiro');

function atualizarcards() {
  const carteiraAberta = window.getComputedStyle(carteira).display !== "none";
  const carrinhoAberto = window.getComputedStyle(carrinho).display !== "none";

  if (carteiraAberta || carrinhoAberto) {
    cards.classList.add("painel-aberto");
  } else {
    cards.classList.remove("painel-aberto");
  }
}

function toggleCarteira() {
  const atual = window.getComputedStyle(carteira).display;
  /*  Alterna entre flex e none sem interferir no carrinho */
  carteira.style.display = (atual === "none") ? "flex" : "none";

  atualizarcards();
}

function toggleCarrinho() {
  const atual = window.getComputedStyle(carrinho).display;
  /* Alterna entre block e none sem interferir na carteira */
  carrinho.style.display = (atual === "none") ? "block" : "none";

  atualizarcards();
}
/* Função para abrir/fechar o menu lateral e o overlay */
function traitMenu() {
  const menu = document.getElementById("lado")
  const overlay = document.getElementById("overlay")

  if (menu && overlay) {
    menu.classList.toggle("ativo")
    overlay.classList.toggle("ativo")
  }
}

/*carteira js*/

let data =[
  "13/13/1313",
  "13/13/1313",
  "13/13/1313",
  "13/13/1313",
  "13/13/1313",
  "13/13/1313"
]

let precoExtrato = [
  "13,13",
  "13,13",
  "13,13",
  "13,13",
  "13,13",
  "13,13"
]

let nomeExtrato = [
  "nome",
  "nome",
  "nome",
  "nome",
  "nome",
  "nome"
]

function extrato() {
  let extrato = document.querySelector("#extratos");

  for (let i = 0; i < nomeExtrato.length; i++) {
  extrato.innerHTML +=`<div class="extratoItem" id="extratoItem">
                <div class="esquerda" id="esquerda">
                  <div class="dataExtrato" id="dataExtrato">
                    <p>${data[i]}</p>
                  </div>
                  <div class="descricaoExtrato" id="descricaoExtrato">
                    <p>${nomeExtrato[i]}</p>
                  </div>
                </div>
                <div class="direita" id="direita">
                  <div class="valorExtrato" id="valorExtrato">
                    <p>- R$ ${precoExtrato[i]}  </p>
                  </div>
                </div>
              </div>`;
  }
}
extrato();