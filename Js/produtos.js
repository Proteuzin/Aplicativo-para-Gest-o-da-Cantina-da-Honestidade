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
function some_aparece(){
  const botao = document.getElementById("butaocarteira")
  const carteira = document.getElementById("saldo")
  const botao2 = document.getElementById("botaocarrinho")
  const carrinho = document.getElementById("carrinho")

  botao.addEventListener("click",function(){
    if (carteira.style.display === "none"){
      carteira.style.display = "block"
    }else {
      carteira.style.display = "none"
    }
    botao2.addEventListener("click",function(){
      if (carrinho.style.display === "none"){
        carrinho.style.display = "block"
      }else {
        carrinho.style.display = "none"
      }
    })
  })
}
