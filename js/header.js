window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("compact");
    } else {
        header.classList.remove("compact");
    }

});
function voltarTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", () => {
  const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
  }
});