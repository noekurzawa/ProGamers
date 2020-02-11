document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector(".navbar");

  function addShadow() {
    if (window.scrollY >= 50) {
      nav.classList.add("shadow-navbar");
    } else {
      nav.classList.remove("shadow-navbar");
    }
  }

  window.addEventListener("scroll", addShadow);

  
  $(document).ready(function() {
    $(document).click(function(event) {
      var clickover = $(event.target);
      var _opened = $(".navbar-collapse").hasClass("show");
      if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
      }
    });
  });
});
