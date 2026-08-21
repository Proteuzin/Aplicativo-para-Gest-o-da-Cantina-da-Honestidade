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
  "Nome",
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
      <img src="${img[i]}" id="fotoCard" class="fotoCard">

      <p class="texto">${nome[i]}</p>

      <p class="preco">${preco[i]}</p>

      <button class="butcard">Adicionar</button>
    `;
  }
}

card();