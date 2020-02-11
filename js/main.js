document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector(".navbar");

  function addShadow() {
    if (window.scrollY >= 150) {
      nav.classList.add("shadow-navbar");
    } else {
      nav.classList.remove("shadow-navbar");
    }
  }

  window.addEventListener("scroll", addShadow);
});
