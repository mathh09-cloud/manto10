let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarContadorCarrinho();
  renderizarCarrinho();
}

function atualizarContadorCarrinho() {
  const contador = document.getElementById("cartCount");
  if (contador) contador.innerText = carrinho.length;
}

function renderizarCarrinho() {
  const lista = document.getElementById("carrinhoLista");
  const totalTexto = document.getElementById("totalCarrinho");

  if (!lista || !totalTexto) return;

  lista.innerHTML = "";

  if (carrinho.length === 0) {
    lista.innerHTML = `<h2 style="text-align:center;">Seu carrinho está vazio.</h2>`;
    totalTexto.innerText = "Total: R$ 0,00";
    return;
  }

  let total = 0;

  carrinho.forEach((item, index) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    lista.innerHTML += `
      <div class="cart-item">
        <img src="${item.imagem}" alt="${item.nome}">

        <div class="cart-info">
          <h3>${item.nome}</h3>
          <p>${item.modalidade === "prontaEntrega" ? "⚡ Pronta Entrega" : "📦 Encomenda"}</p>
          <p>Tamanho: ${item.tamanho}</p>
          <p>Quantidade: ${item.quantidade}</p>
          <p>Subtotal: R$ ${subtotal},00</p>

          <button onclick="removerProduto(${index})">Remover</button>
        </div>
      </div>
    `;
  });

  totalTexto.innerText = `Total: R$ ${total},00`;
}

function removerProduto(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
}

function limparCarrinho() {
  carrinho = [];
  salvarCarrinho();
}

function finalizarWhatsApp() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:%0A%0A";
  let total = 0;

  carrinho.forEach(item => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const linkProduto = `${window.location.origin}${window.location.pathname.replace("carrinho.html", "")}${item.link}`;

mensagem += `• ${item.nome}%0A`;
mensagem += `Código: ${item.codigo}%0A`;
mensagem += `Link: ${linkProduto}%0A`;
mensagem += `${item.modalidade === "prontaEntrega" ? "⚡ Pronta Entrega" : "📦 Encomenda"}%0A`;
mensagem += `Tamanho: ${item.tamanho}%0A`;
mensagem += `Quantidade: ${item.quantidade}%0A`;

if (item.personalizacao) {
    mensagem += `Personalização: Sim%0A`;
    mensagem += `Nome: ${item.nomePersonalizado}%0A`;
    mensagem += `Número: ${item.numeroPersonalizado}%0A`;
} else {
    mensagem += `Personalização: Não%0A`;
}

mensagem += `Subtotal: R$ ${subtotal},00%0A%0A`;
  });

  mensagem += `TOTAL: R$ ${total},00`;

  window.open("https://wa.me/5591984290048?text=" + mensagem, "_blank");
}

atualizarContadorCarrinho();
renderizarCarrinho();