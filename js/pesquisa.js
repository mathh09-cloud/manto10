const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const termo = searchInput.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {
      const textoCard = card.innerText.toLowerCase();

      if (textoCard.includes(termo)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}