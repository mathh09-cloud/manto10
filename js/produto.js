const detalhe = document.getElementById("produtoDetalhe");
const relacionados = document.getElementById("produtosRelacionados");

const params = new URLSearchParams(window.location.search);
const codigo = params.get("codigo");

let produtoAtual = produtos.find(item => item.codigo === codigo);

let modalidadeProduto = "encomenda";
let tamanhoProduto = null;
let quantidadeProduto = 1;
let personalizacaoProduto = false;

if (!produtoAtual) {
  detalhe.innerHTML = `
    <div class="section-title">
      <h2>Produto não encontrado</h2>
      <p>Volte para a loja e escolha outra camisa.</p>
      <a href="index.html" class="hero-btn">Voltar para loja</a>
    </div>
  `;
} else {
  renderizarProduto();
  renderizarRelacionados();
}

function renderizarProduto() {
  const imagens = produtoAtual.imagens || [produtoAtual.imagem];

  detalhe.innerHTML = `
    <div class="product-page">
      <div class="product-gallery">
        <img id="produtoImagemPrincipal" src="${imagens[0]}" alt="${produtoAtual.nome}">

        <div class="product-thumbs">
          ${imagens.map((img, index) => `
            <img 
              src="${img}" 
              class="${index === 0 ? "active" : ""}" 
              onclick="trocarImagemProduto('${img}', this)"
            >
          `).join("")}
        </div>
      </div>

      <div class="product-info-page">
        <span class="product-code">Código ${produtoAtual.codigo}</span>

        <h1>${produtoAtual.nome}</h1>

        <p class="product-meta">Categoria: ${produtoAtual.categoria}</p>
        <p class="product-meta">Marca: ${produtoAtual.marca}</p>
        <p class="product-meta">Temporada: ${produtoAtual.temporada}</p>
        <p class="product-meta">Versão: ${produtoAtual.versao}</p>

        <h3>Modalidade</h3>

        <div class="modal-options">
          <button id="produtoBtnPronta" onclick="selecionarModalidadeProduto('prontaEntrega')">
            Pronta Entrega
          </button>

          <button id="produtoBtnEncomenda" onclick="selecionarModalidadeProduto('encomenda')">
            Encomenda
          </button>
        </div>

        <p class="product-price" id="produtoPreco"></p>

        <div class="product-message" id="produtoMensagemPrazo"></div>

        <h3>Tamanho</h3>
        <div class="sizes" id="produtoTamanhos"></div>

        <div class="personalizacao-box" id="produtoPersonalizacaoBox">
          <label>
            <input type="checkbox" id="produtoCheckPersonalizacao" onchange="alternarPersonalizacaoProduto()">
            Adicionar nome + número (+R$20)
          </label>

          <div id="produtoCamposPersonalizacao" class="personalizacao-campos">
            <input type="text" id="produtoNomePersonalizado" placeholder="Nome na camisa">
            <input type="text" id="produtoNumeroPersonalizado" placeholder="Número">
          </div>
        </div>

        <h3>Quantidade</h3>

        <div class="quantity">
          <button onclick="alterarQuantidadeProduto(-1)">-</button>
          <span id="produtoQuantidade">1</span>
          <button onclick="alterarQuantidadeProduto(1)">+</button>
        </div>

        <button class="add-cart" onclick="adicionarProdutoPaginaAoCarrinho()">
          Adicionar ao carrinho
        </button>
        <button class="share-btn" onclick="compartilharProduto()">
          Compartilhar produto
        </button>
      </div>
    </div>
  `;

  selecionarModalidadeProduto("encomenda");
}

function trocarImagemProduto(imagem, elemento) {
  document.getElementById("produtoImagemPrincipal").src = imagem;

  document.querySelectorAll(".product-thumbs img").forEach(img => {
    img.classList.remove("active");
  });

  elemento.classList.add("active");
}

function selecionarModalidadeProduto(modalidade) {
  modalidadeProduto = modalidade;
  tamanhoProduto = null;
  quantidadeProduto = 1;

  document.getElementById("produtoQuantidade").innerText = quantidadeProduto;

  document.getElementById("produtoBtnPronta").classList.remove("active");
  document.getElementById("produtoBtnEncomenda").classList.remove("active");

  if (modalidade === "prontaEntrega") {
    document.getElementById("produtoBtnPronta").classList.add("active");

    document.getElementById("produtoMensagemPrazo").innerHTML = `
      <strong>Disponível em estoque.</strong><br>
      Envio realizado o mais rápido possível após a confirmação do pedido.
    `;
  } else {
    document.getElementById("produtoBtnEncomenda").classList.add("active");

    document.getElementById("produtoMensagemPrazo").innerHTML = `
      <strong>Prazo estimado:</strong><br>
      30 a 45 dias.
    `;
  }

  controlarPersonalizacaoProduto();
  atualizarPrecoProduto();
  renderizarTamanhosProduto();
}

function atualizarPrecoProduto() {
  let preco = produtoAtual.preco[modalidadeProduto];

  if (personalizacaoProduto) {
    preco += produtoAtual.valorPersonalizacao;
  }

  document.getElementById("produtoPreco").innerText = `R$ ${preco},00`;
}

function renderizarTamanhosProduto() {
  const area = document.getElementById("produtoTamanhos");
  area.innerHTML = "";

  let tamanhos = [];

  if (modalidadeProduto === "prontaEntrega") {
    tamanhos = Object.keys(produtoAtual.estoque.prontaEntrega)
      .filter(tamanho => produtoAtual.estoque.prontaEntrega[tamanho] > 0);
  } else {
    tamanhos = produtoAtual.estoque.encomenda;
  }

  tamanhos.forEach(tamanho => {
    area.innerHTML += `
      <button onclick="selecionarTamanhoProduto('${tamanho}', this)">
        ${tamanho}
      </button>
    `;
  });
}

function selecionarTamanhoProduto(tamanho, botao) {
  tamanhoProduto = tamanho;
  quantidadeProduto = 1;

  document.getElementById("produtoQuantidade").innerText = quantidadeProduto;

  document.querySelectorAll("#produtoTamanhos button").forEach(btn => {
    btn.classList.remove("active");
  });

  botao.classList.add("active");
}

function alterarQuantidadeProduto(valor) {
  quantidadeProduto += valor;

  if (quantidadeProduto < 1) quantidadeProduto = 1;

  if (modalidadeProduto === "prontaEntrega" && tamanhoProduto) {
    const estoqueDisponivel = produtoAtual.estoque.prontaEntrega[tamanhoProduto];

    if (quantidadeProduto > estoqueDisponivel) {
      quantidadeProduto = estoqueDisponivel;
    }
  }

  document.getElementById("produtoQuantidade").innerText = quantidadeProduto;
}

function controlarPersonalizacaoProduto() {
  const box = document.getElementById("produtoPersonalizacaoBox");
  const check = document.getElementById("produtoCheckPersonalizacao");
  const campos = document.getElementById("produtoCamposPersonalizacao");

  if (!box || !check || !campos) return;

  if (modalidadeProduto === "encomenda" && produtoAtual.personalizacao) {
    box.style.display = "block";
  } else {
    box.style.display = "none";
    check.checked = false;
    campos.classList.remove("active");
    personalizacaoProduto = false;
  }
}

function alternarPersonalizacaoProduto() {
  const check = document.getElementById("produtoCheckPersonalizacao");
  const campos = document.getElementById("produtoCamposPersonalizacao");

  personalizacaoProduto = check.checked;

  if (personalizacaoProduto) {
    campos.classList.add("active");
  } else {
    campos.classList.remove("active");
    document.getElementById("produtoNomePersonalizado").value = "";
    document.getElementById("produtoNumeroPersonalizado").value = "";
  }

  atualizarPrecoProduto();
}

function adicionarProdutoPaginaAoCarrinho() {
  if (!tamanhoProduto) {
    alert("Escolha um tamanho.");
    return;
  }

  let nomePersonalizado = "";
  let numeroPersonalizado = "";

  if (personalizacaoProduto) {
    nomePersonalizado = document.getElementById("produtoNomePersonalizado").value.trim();
    numeroPersonalizado = document.getElementById("produtoNumeroPersonalizado").value.trim();

    if (!nomePersonalizado || !numeroPersonalizado) {
      alert("Preencha o nome e o número da personalização.");
      return;
    }
  }

  let precoFinal = produtoAtual.preco[modalidadeProduto];

  if (personalizacaoProduto) {
    precoFinal += produtoAtual.valorPersonalizacao;
  }

  carrinho.push({
    id: produtoAtual.id,
    codigo: produtoAtual.codigo,
    nome: produtoAtual.nome,
    imagem: produtoAtual.imagem,
    modalidade: modalidadeProduto,
    tamanho: tamanhoProduto,
    quantidade: quantidadeProduto,
    preco: precoFinal,
    personalizacao: personalizacaoProduto,
    nomePersonalizado: nomePersonalizado,
    numeroPersonalizado: numeroPersonalizado,
    link: `produto.html?codigo=${produtoAtual.codigo}`
  });

  salvarCarrinho();
  mostrarToast();
}

function renderizarRelacionados() {
  if (!relacionados || !produtoAtual) return;

  const sugestoes = produtos
    .filter(item => item.codigo !== produtoAtual.codigo)
    .slice(0, 4);

  relacionados.innerHTML = "";

  sugestoes.forEach(produto => {
    const menorPreco = Math.min(
      produto.preco.prontaEntrega,
      produto.preco.encomenda
    );

    relacionados.innerHTML += `
      <div class="product-card">
        <a href="produto.html?codigo=${produto.codigo}">
          <img src="${produto.imagem}" alt="${produto.nome}">
        </a>

        <div class="product-info">
          <h3>${produto.nome}</h3>
          <span class="product-category">Código ${produto.codigo}</span>
          <span class="product-category">${produto.categoria}</span>
          <p class="price">A partir de R$ ${menorPreco},00</p>
          <a href="produto.html?codigo=${produto.codigo}" class="hero-btn">Ver produto</a>
        </div>
      </div>
    `;
  });
}

function mostrarToast() {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 120){
        header.classList.add("compact");
    }else{
        header.classList.remove("compact");
    }

});
function compartilharProduto() {
  const link = window.location.href;

  navigator.clipboard.writeText(link);

  alert("Link do produto copiado!");
}