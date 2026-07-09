const lista = document.getElementById("lista-produtos");

let produtoSelecionado = null;
let modalidadeSelecionada = "encomenda";
let tamanhoSelecionado = null;
let quantidade = 1;
let imagemAtualIndex = 0;

let personalizacaoSelecionada = false;
let nomePersonalizado = "";
let numeroPersonalizado = "";

function renderizarProdutos() {
  if (!lista) return;

  lista.innerHTML = "";

  produtos.forEach(produto => {
    const menorPreco = Math.min(
      produto.preco.prontaEntrega,
      produto.preco.encomenda
    );

    const temProntaEntrega = Object.values(produto.estoque.prontaEntrega).some(qtd => qtd > 0);
    const temEncomenda = produto.estoque.encomenda.length > 0;

    lista.innerHTML += `
      <div class="product-card"
        data-category="${produto.categoria}"
        data-pronta="${temProntaEntrega}"
        data-encomenda="${temEncomenda}"
      >
      <button class="favorite-btn ${produtoFavoritado(produto.codigo) ? "favorited" : ""}" onclick="alternarFavorito('${produto.codigo}', this)">
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
          <button onclick="abrirProduto(${produto.id})">Comprar</button>
        </div>
      </div>
    `;
  });
}

function abrirProduto(id) {
  produtoSelecionado = produtos.find(produto => produto.id === id);
  if (!produtoSelecionado) return;

  modalidadeSelecionada = "encomenda";
  tamanhoSelecionado = null;
  quantidade = 1;
  imagemAtualIndex = 0;

  personalizacaoSelecionada = false;
  nomePersonalizado = "";
  numeroPersonalizado = "";

  const imagens = produtoSelecionado.imagens || [produtoSelecionado.imagem];

  document.getElementById("modalImagem").src = imagens[0];
  document.getElementById("modalNome").innerText = produtoSelecionado.nome;
  document.getElementById("modalCategoria").innerText =
    `Código ${produtoSelecionado.codigo} • ${produtoSelecionado.categoria}`;

  document.getElementById("quantidadeProduto").innerText = quantidade;

  resetarPersonalizacao();
  criarMiniaturas(imagens);

  document.getElementById("produtoModal").classList.add("active");

  selecionarModalidade("encomenda");
}

function criarMiniaturas(imagens) {
  const miniaturas = document.getElementById("miniaturas");
  if (!miniaturas) return;

  miniaturas.innerHTML = "";

  imagens.forEach((imagem, index) => {
    const img = document.createElement("img");

    img.src = imagem;
    img.alt = `Foto ${index + 1}`;

    if (index === 0) img.classList.add("active-thumb");

    img.addEventListener("click", () => {
      imagemAtualIndex = index;
      document.getElementById("modalImagem").src = imagem;

      document.querySelectorAll(".miniaturas img").forEach(item => {
        item.classList.remove("active-thumb");
      });

      img.classList.add("active-thumb");
    });

    miniaturas.appendChild(img);
  });
}

function fecharModal() {
  document.getElementById("produtoModal").classList.remove("active");
}

function selecionarModalidade(modalidade) {
  modalidadeSelecionada = modalidade;
  tamanhoSelecionado = null;
  quantidade = 1;

  document.getElementById("quantidadeProduto").innerText = quantidade;

  document.getElementById("btnPronta").classList.remove("active");
  document.getElementById("btnEncomenda").classList.remove("active");

  if (modalidade === "prontaEntrega") {
    document.getElementById("btnPronta").classList.add("active");
  } else {
    document.getElementById("btnEncomenda").classList.add("active");
  }

  controlarPersonalizacaoPorModalidade();
  atualizarPrecoModal();
  renderizarTamanhos();
}

function controlarPersonalizacaoPorModalidade() {
  const box = document.getElementById("personalizacaoBox");
  const check = document.getElementById("checkPersonalizacao");
  const campos = document.getElementById("camposPersonalizacao");

  if (!box || !check || !campos) return;

  if (modalidadeSelecionada === "encomenda" && produtoSelecionado.personalizacao) {
    box.style.display = "block";
  } else {
    box.style.display = "none";
    check.checked = false;
    campos.classList.remove("active");

    personalizacaoSelecionada = false;
    nomePersonalizado = "";
    numeroPersonalizado = "";

    const inputNome = document.getElementById("nomePersonalizado");
    const inputNumero = document.getElementById("numeroPersonalizado");

    if (inputNome) inputNome.value = "";
    if (inputNumero) inputNumero.value = "";
  }
}

function alternarPersonalizacao() {
  const check = document.getElementById("checkPersonalizacao");
  const campos = document.getElementById("camposPersonalizacao");

  if (!check || !campos) return;

  personalizacaoSelecionada = check.checked;

  if (personalizacaoSelecionada) {
    campos.classList.add("active");
  } else {
    campos.classList.remove("active");

    const inputNome = document.getElementById("nomePersonalizado");
    const inputNumero = document.getElementById("numeroPersonalizado");

    if (inputNome) inputNome.value = "";
    if (inputNumero) inputNumero.value = "";

    nomePersonalizado = "";
    numeroPersonalizado = "";
  }

  atualizarPrecoModal();
}

function atualizarPrecoModal() {
  if (!produtoSelecionado) return;

  let preco = produtoSelecionado.preco[modalidadeSelecionada];

  if (personalizacaoSelecionada) {
    preco += produtoSelecionado.valorPersonalizacao;
  }

  document.getElementById("modalPreco").innerText = `R$ ${preco},00`;
}

function renderizarTamanhos() {
  const areaTamanhos = document.getElementById("modalTamanhos");
  if (!areaTamanhos) return;

  areaTamanhos.innerHTML = "";

  let tamanhos = [];

  if (modalidadeSelecionada === "prontaEntrega") {
    tamanhos = Object.keys(produtoSelecionado.estoque.prontaEntrega)
      .filter(tamanho => produtoSelecionado.estoque.prontaEntrega[tamanho] > 0);
  } else {
    tamanhos = produtoSelecionado.estoque.encomenda;
  }

  tamanhos.forEach(tamanho => {
    areaTamanhos.innerHTML += `
      <button onclick="selecionarTamanho('${tamanho}', this)">
        ${tamanho}
      </button>
    `;
  });
}

function selecionarTamanho(tamanho, botao) {
  tamanhoSelecionado = tamanho;
  quantidade = 1;

  document.getElementById("quantidadeProduto").innerText = quantidade;

  document.querySelectorAll(".sizes button").forEach(btn => {
    btn.classList.remove("active");
  });

  botao.classList.add("active");
}

function alterarQuantidade(valor) {
  quantidade += valor;

  if (quantidade < 1) quantidade = 1;

  if (modalidadeSelecionada === "prontaEntrega" && tamanhoSelecionado) {
    const estoqueDisponivel = produtoSelecionado.estoque.prontaEntrega[tamanhoSelecionado];

    if (quantidade > estoqueDisponivel) {
      quantidade = estoqueDisponivel;
    }
  }

  document.getElementById("quantidadeProduto").innerText = quantidade;
}

function adicionarAoCarrinho() {
  if (!tamanhoSelecionado) {
    alert("Escolha um tamanho.");
    return;
  }

  if (modalidadeSelecionada === "prontaEntrega") {
    const estoqueDisponivel = produtoSelecionado.estoque.prontaEntrega[tamanhoSelecionado];

    if (quantidade > estoqueDisponivel) {
      alert(`Temos apenas ${estoqueDisponivel} unidade(s) disponível(is) nesse tamanho.`);
      return;
    }
  }

  if (personalizacaoSelecionada) {
    nomePersonalizado = document.getElementById("nomePersonalizado").value.trim();
    numeroPersonalizado = document.getElementById("numeroPersonalizado").value.trim();

    if (!nomePersonalizado || !numeroPersonalizado) {
      alert("Preencha o nome e o número da personalização.");
      return;
    }
  }

  let precoFinal = produtoSelecionado.preco[modalidadeSelecionada];

  if (personalizacaoSelecionada) {
    precoFinal += produtoSelecionado.valorPersonalizacao;
  }

  carrinho.push({
    id: produtoSelecionado.id,
    codigo: produtoSelecionado.codigo,
    nome: produtoSelecionado.nome,
    imagem: produtoSelecionado.imagem,
    modalidade: modalidadeSelecionada,
    tamanho: tamanhoSelecionado,
    quantidade: quantidade,
    preco: precoFinal,
    personalizacao: personalizacaoSelecionada,
    nomePersonalizado: nomePersonalizado,
    numeroPersonalizado: numeroPersonalizado,
    link: `produto.html?codigo=${produtoSelecionado.codigo}`
  });

  salvarCarrinho();
  fecharModal();
  mostrarToast();
}

function resetarPersonalizacao() {
  const check = document.getElementById("checkPersonalizacao");
  const campos = document.getElementById("camposPersonalizacao");
  const inputNome = document.getElementById("nomePersonalizado");
  const inputNumero = document.getElementById("numeroPersonalizado");

  if (check) check.checked = false;
  if (campos) campos.classList.remove("active");
  if (inputNome) inputNome.value = "";
  if (inputNumero) inputNumero.value = "";
}

function mostrarToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (!header) return;

  if (window.scrollY > 80) {
    header.classList.add("compact");
  } else {
    header.classList.remove("compact");
  }
});

renderizarProdutos();