let categoriaSelecionada = "todos";
let disponibilidadeSelecionada = "todos";

function aplicarFiltros() {
  document.querySelectorAll(".product-card").forEach(card => {
    const categoria = card.dataset.category;
    const pronta = card.dataset.pronta;
    const encomenda = card.dataset.encomenda;

    let mostrar = true;

    if (categoriaSelecionada !== "todos" && categoria !== categoriaSelecionada) {
      mostrar = false;
    }

    if (disponibilidadeSelecionada === "prontaEntrega" && pronta !== "true") {
      mostrar = false;
    }

    if (disponibilidadeSelecionada === "encomenda" && encomenda !== "true") {
      mostrar = false;
    }

    card.style.display = mostrar ? "" : "none";
  });
}

document.querySelectorAll(".filter-btn").forEach(botao => {
  botao.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    botao.classList.add("active");

    categoriaSelecionada = botao.dataset.category;
    aplicarFiltros();
  });
});

document.querySelectorAll(".availability-btn").forEach(botao => {
  botao.addEventListener("click", () => {
    document.querySelectorAll(".availability-btn").forEach(btn => btn.classList.remove("active"));
    botao.classList.add("active");

    disponibilidadeSelecionada = botao.dataset.disponibilidade;
    aplicarFiltros();
  });
});