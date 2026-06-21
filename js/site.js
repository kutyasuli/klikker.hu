/* Klikker.hu — tiny vanilla helpers (mobile menu + mascot click) */
(function () {
  "use strict";

  // --- Mobile menu toggle ---
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // On mobile, tapping a section with a submenu opens it instead of navigating.
    nav.querySelectorAll(".primary-nav__item.has-submenu > a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (window.matchMedia("(max-width: 860px)").matches) {
          var item = link.parentElement;
          if (!item.classList.contains("is-open")) {
            e.preventDefault();
            item.classList.add("is-open");
          }
        }
      });
    });
  }

  // --- Footer clicker mascot: make a satisfying CLICK! ---
  var mascot = document.getElementById("mascot");
  if (mascot) {
    mascot.addEventListener("click", function () {
      mascot.classList.remove("is-clicked");
      // force reflow so the animation can restart
      void mascot.offsetWidth;
      mascot.classList.add("is-clicked");
    });
    mascot.addEventListener("animationend", function () {
      mascot.classList.remove("is-clicked");
    });
  }
})();
