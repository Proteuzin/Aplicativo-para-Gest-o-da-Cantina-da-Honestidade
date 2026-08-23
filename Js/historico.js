/* Arrays de teste simples */
let idPedido = [
  "#1024",
  "#1019",
  "#1002"
];

let dataPedido = [
  "22/08/2026 - 14:30",
  "20/08/2026 - 10:15",
  "18/08/2026 - 16:45"
];

let itensPedido = [
  "2x Caviar Polanco (10g)",
  "1x Suco Natural, 1x Salgado",
  "1x Refrigerante, 1x Chocolate"
];

let totalPedido = [
  "R$ 26,00",
  "R$ 13,50",
  "R$ 11,00"
];

let statusPedido = [
  "concluido",
  "concluido",
  "cancelado"
];

let statusTexto = [
  "Concluído",
  "Concluído",
  "Cancelado"
];

/* Função para alternar o menu lateral na tela de histórico */
function traitMenu() {
  const menu = document.getElementById("lado");
  const overlay = document.getElementById("overlay");

  if (menu && overlay) {
    menu.classList.toggle("ativo");
    overlay.classList.toggle("ativo");
  }
}

/* Função para renderizar as compras na div #historicoLista */
function carregarHistorico() {
  const container = document.getElementById("historicoLista");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < idPedido.length; i++) {
    container.innerHTML += `
      <div class="pedido-card">
        <div class="pedido-info">
          <span class="pedido-id">Pedido ${idPedido[i]}</span>
          <span class="pedido-data">${dataPedido[i]}</span>
        </div>
        <div class="pedido-detalhes">
          <p><strong>Itens:</strong> ${itensPedido[i]}</p>
          <p><strong>Total:</strong> <span class="preco-destaque">${totalPedido[i]}</span></p>
        </div>
        <span class="status ${statusPedido[i]}">${statusTexto[i]}</span>
      </div>
    `;
  }
}

/* Garante o carregamento ao abrir a página */
document.addEventListener("DOMContentLoaded", carregarHistorico);