// 1. Array de produtos unificado
const produtos = [
  { id: "1", nome: "Caviar Polanco 1", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "2", nome: "Caviar Polanco 2", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "3", nome: "Caviar Polanco 3", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "4", nome: "Caviar Polanco 4", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "5", nome: "Caviar Polanco 5", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "6", nome: "Caviar Polanco 6", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "7", nome: "Caviar Polanco 7", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "8", nome: "Caviar Polanco 8", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" },
  { id: "9", nome: "Caviar Polanco 9", preco: 150.00, img: "../images/caviar-polanco-siberian-reserve-30g_04f8f731-f5cb-4720-80b7-49af5675303b_1200x.webp" }
];

// Array global do carrinho
let itensCarrinho = [];

// 2. Executa a criação dos cards após o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  card();
  atualizarHTMLCarrinho();
});

// 3. Função para renderizar os cards na tela
function card() {
  const containerCards = document.querySelector("#primeiro");
  if (!containerCards) return;

  containerCards.innerHTML = "";

  produtos.forEach(produto => {
    containerCards.innerHTML += `
      <div class="DivCard">
          <img src="${produto.img}" class="fotoCard" alt="${produto.nome}">
          <p class="texto">${produto.nome}</p>
          <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
          <button class="butcard" onclick="adicionarCarrinho('${produto.id}')">Adicionar</button>
      </div>`;
  });
}

// 4. Função para adicionar produtos ao carrinho
function adicionarCarrinho(idProduto) {
  const produtoEncontrado = produtos.find(p => p.id === idProduto);
  if (!produtoEncontrado) return;

  const itemExistente = itensCarrinho.find(item => item.id === idProduto);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    itensCarrinho.push({ ...produtoEncontrado, quantidade: 1 });
  }

  atualizarHTMLCarrinho();
}

// 5. Atualiza o painel do carrinho e o badge de notificação no topo
function atualizarHTMLCarrinho() {
  const txtCarrinho = document.getElementById("txtCarrinho");
  const meiocarrinho = document.getElementById("meiocarrinho");
  const baixoCarrinho = document.getElementById("baixoCarrinho");
  const contadorCarrinho = document.getElementById("contador-carrinho");

  const totalItens = itensCarrinho.reduce((acc, item) => acc + item.quantidade, 0);
  const valorTotal = itensCarrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  // Atualiza a bolinha vermelha no ícone do canto superior direito
  if (contadorCarrinho) {
    contadorCarrinho.innerText = totalItens;
  }

  // Atualiza a quantidade no cabeçalho do painel lateral
  if (txtCarrinho) {
    txtCarrinho.innerHTML = `
      <h2>Carrinho</h2>
      <p>${totalItens} ${totalItens === 1 ? 'item' : 'itens'}</p>
    `;
  }

  // Atualiza a lista visual dos produtos
  if (meiocarrinho) {
    if (itensCarrinho.length === 0) {
      meiocarrinho.innerHTML = `
        <p>Seu carrinho está vazio</p>
        <small>"Adicione um produto para começar."</small>
      `;
    } else {
      meiocarrinho.innerHTML = "";
      itensCarrinho.forEach(item => {
        meiocarrinho.innerHTML += `
          <div style="display:flex; justify-content:space-between; align-items:center; padding: 10px; border-bottom: 1px solid #ddd;">
            <div style="text-align:left;">
              <p style="font-weight:bold; margin:0;">${item.nome}</p>
              <small>R$ ${item.preco.toFixed(2)} x ${item.quantidade}</small>
            </div>
          </div>
        `;
      });
    }
  }

  // Atualiza o valor total em dinheiro
  if (baixoCarrinho) {
    const elementoPreco = baixoCarrinho.querySelector("h3");
    if (elementoPreco) {
      elementoPreco.innerText = `R$ ${valorTotal.toFixed(2)}`;
    }
  }
} // CHAVE DE FECHAMENTO CORRIGIDA AQUI

// 6. Manipulação dos painéis laterais e menus
function atualizarcards() {
  const carteira = document.getElementById("saldo");
  const carrinho = document.getElementById("carrinho");
  const cards = document.getElementById('primeiro');

  if (!carteira || !carrinho || !cards) return;

  const carteiraAberta = window.getComputedStyle(carteira).display !== "none";
  const carrinhoAberto = window.getComputedStyle(carrinho).display !== "none";

  if (carteiraAberta || carrinhoAberto) {
    cards.classList.add("painel-aberto");
  } else {
    cards.classList.remove("painel-aberto");
  }
}

function toggleCarteira() {
  const carteira = document.getElementById("saldo");
  if (!carteira) return;

  const atual = window.getComputedStyle(carteira).display;
  carteira.style.display = (atual === "none") ? "flex" : "none";
  atualizarcards();
}

function toggleCarrinho() {
  const carrinho = document.getElementById("carrinho");
  if (!carrinho) return;

  const atual = window.getComputedStyle(carrinho).display;
  carrinho.style.display = (atual === "none") ? "block" : "none";
  atualizarcards();
}

function traitMenu() {
  const menu = document.getElementById("lado");
  const overlay = document.getElementById("overlay");

  if (menu && overlay) {
    menu.classList.toggle("ativo");
    overlay.classList.toggle("ativo");
  }
}

// 7. Função de Cancelamento da Compra
function cancelarCompra() {
  if (itensCarrinho.length === 0) {
    alert("O carrinho já está vazio!");
    return;
  }

  const confirmar = confirm("Tem certeza que deseja cancelar a compra e esvaziar o carrinho?");

  if (confirmar) {
    itensCarrinho = [];
    atualizarHTMLCarrinho();
    alert("Compra cancelada e carrinho esvaziado com sucesso.");
  }
}
// Abre o modal de pagamento
function finalizarPagamento(){
  if(itensCarrinho.length === 0){
    alert("Seu carrinho está vazio!");
    return;
  }
  const modal = document.getElementById("modalPagamento");
  if(modal){
    modal.style.display = "flex";
  }
}
// Fecha o modal de pagamento
function fecharModalPagamento(){
  const modal = document.getElementById("modalPagamento")
  if(modal){
    modal.style.display = "none";
  }
}
// Processa o pagamento e limpa tudo
function processarPagamento(){
  const opcaoSelecionada = document.querySelector('input[name="formaPagamento"]:checked');

  if(!opcaoSelecionada){
    alert("Por favor, selecione uma forma de pagamento!");
    return;
  }

  // 1. Esvazia as variáveis na memória
  itensCarrinho = [];
  if (typeof produtos !== "undefined") {
    produtos.forEach(p => p.quantidade = 0);
  }

  // 2. Atualiza as telas
  if (typeof atualizarHTMLCarrinho === "function") atualizarHTMLCarrinho();
  if (typeof atualizarcards === "function") atualizarcards();

  // 3. Força a limpeza direta do HTML do carrinho (Caso o carrinho use innerHTML)
  const listaCarrinho = document.getElementById("itensCarrinho") || document.querySelector(".carrinho-itens");
  if (listaCarrinho) {
    listaCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
  }

  // Força o valor total a zerar na tela
  const precoTotal = document.getElementById("precoTotal") || document.querySelector(".total-carrinho");
  if (precoTotal) {
    precoTotal.innerText = "R$ 0,00";
  }

  // 4. Fecha Modal e Esconde Lateral do Carrinho
  fecharModalPagamento();
  const carrinho = document.getElementById("carrinho");
  if (carrinho) {
    carrinho.style.display = "none";
  }
}