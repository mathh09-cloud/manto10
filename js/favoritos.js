let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function salvarFavoritos() {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function alternarFavorito(codigo, botao) {
  if (favoritos.includes(codigo)) {
    favoritos = favoritos.filter(item => item !== codigo);
    botao.classList.remove("favorited");
  } else {
    favoritos.push(codigo);
    botao.classList.add("favorited");
  }

  salvarFavoritos();
  atualizarContadorFavoritos();
}

function produtoFavoritado(codigo) {
  return favoritos.includes(codigo);
}
function atualizarContadorFavoritos() {
  const favCount = document.getElementById("favCount");

  if (favCount) {
    favCount.innerText = favoritos.length;
  }
}

atualizarContadorFavoritos();