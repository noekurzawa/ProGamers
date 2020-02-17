document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector(".navbar");

  function addShadow() {
    if (window.scrollY >= 1) {
      nav.classList.add("shadow-navbar");
    } else {
      nav.classList.remove("shadow-navbar");
    }
  }

  window.addEventListener("scroll", addShadow);

  // Skrypt naprawiający nawigację(zamyka się po kliknięciu w cokolwiek na mobilce)
    $(document).click(function(event) {
      var clickover = $(event.target);
      var _opened = $(".navbar-collapse").hasClass("show");
      if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
      }
    });

    // slick.js
    $('.team-carousel').slick({
      // setting-name: setting-value
    });

});
