const listaFavoritos = document.getElementById("listaFavoritos");

function renderizarFavoritos() {
  listaFavoritos.innerHTML = "";

  const produtosFavoritos = produtos.filter(produto =>
    favoritos.includes(produto.codigo)
  );

  if (produtosFavoritos.length === 0) {
    listaFavoritos.innerHTML = `
      <h2 style="text-align:center;">Nenhum favorito ainda.</h2>
    `;
    return;
  }

  produtosFavoritos.forEach(produto => {
    const menorPreco = Math.min(
      produto.preco.prontaEntrega,
      produto.preco.encomenda
    );

    listaFavoritos.innerHTML += `
      <div class="product-card">
        <button class="favorite-btn favorited" onclick="alternarFavorito('${produto.codigo}', this); renderizarFavoritos();">
          ♥
        </button>

        <a href="produto.html?codigo=${produto.codigo}">
          <img src="${produto.imagem}" alt="${produto.nome}">
        </a>

        <div class="product-info">
          <a href="produto.html?codigo=${produto.codigo}">
            <h3>${produto.nome}</h3>
          </a>

          <span class="product-category">Código ${produto.codigo}</span>
          <span class="product-category">${produto.categoria}</span>

          <p class="price">A partir de R$ ${menorPreco},00</p>

          <a href="produto.html?codigo=${produto.codigo}" class="hero-btn">
            Ver produto
          </a>
        </div>
      </div>
    `;
  });
}

renderizarFavoritos();