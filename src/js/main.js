(function () {
  "use strict";

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const desktopNavLinks = document.querySelectorAll(".nav--desktop a");
  const parallaxTitle = document.querySelector("[data-parallax-title]");
  const parallaxGallery = document.querySelector("[data-parallax-gallery]");
  const parallaxImages = document.querySelectorAll("[data-parallax-image]");
  const form = document.getElementById("contact-form");
  const formStatus = document.querySelector("[data-form-status]");
  const toast = document.querySelector("[data-toast]");
  const toastText = document.querySelector("[data-toast-text]");
  const yearEl = document.querySelector("[data-year]");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* Sticky header */
  function onScrollHeader() {
    if (!header) return;
    const scrolled = window.scrollY > 24;
    header.classList.toggle("is-scrolled", scrolled);
  }

  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* Mobile menu */
  function setMenuOpen(open) {
    if (!navToggle || !mobileMenu) return;
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    mobileMenu.hidden = !open;
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setMenuOpen(false);
  });

  /* Volta do cache do navegador com menu aberto não pode deixar o scroll travado */
  window.addEventListener("pageshow", function (ev) {
    if (!ev.persisted) return;
    document.body.style.overflow = "";
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    if (mobileMenu) mobileMenu.hidden = true;
  });

  /* Section spy: metodologia shares “Conceito” until portfolio */
  function updateActiveNav() {
    const y = window.scrollY + 132;
    const portfolio = document.getElementById("portfolio");
    const sobre = document.getElementById("sobre");
    const contato = document.getElementById("contato");
    let current = "conceito";
    if (contato && y >= contato.offsetTop) current = "contato";
    else if (sobre && y >= sobre.offsetTop) current = "sobre";
    else if (portfolio && y >= portfolio.offsetTop) current = "portfolio";

    desktopNavLinks.forEach(function (a) {
      const href = a.getAttribute("href") || "";
      const id = href.replace("#", "");
      a.classList.toggle("is-active", id === current);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  /* Subtle parallax (respect reduced motion via CSS) */
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function parallaxTick() {
    if (prefersReduced) return;
    const y = window.scrollY;
    if (parallaxTitle) {
      const rect = parallaxTitle.getBoundingClientRect();
      const shift = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.04;
      parallaxTitle.style.transform = "translateY(" + shift.toFixed(2) + "px)";
    }
    if (parallaxGallery) {
      const rect = parallaxGallery.getBoundingClientRect();
      const shift = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.03;
      parallaxGallery.style.transform = "translateY(" + shift.toFixed(2) + "px)";
    }
    if (parallaxImages && parallaxImages.length) {
      parallaxImages.forEach(function (img) {
        const rect = img.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.035;
        const clamped = Math.max(-22, Math.min(22, progress));
        img.style.setProperty("--parallax-y", clamped.toFixed(2) + "px");
      });
    }
  }

  let parallaxScheduled = false;
  window.addEventListener(
    "scroll",
    function () {
      if (prefersReduced) return;
      if (!parallaxScheduled) {
        parallaxScheduled = true;
        requestAnimationFrame(function () {
          parallaxScheduled = false;
          parallaxTick();
        });
      }
    },
    { passive: true }
  );
  parallaxTick();

  /* Contact form — front-end only */
  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.hidden = false;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(function () {
      toast.classList.remove("is-visible");
      window.setTimeout(function () {
        toast.hidden = true;
      }, 400);
    }, 4200);
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (formStatus) {
        formStatus.textContent = "";
        formStatus.classList.remove("is-error", "is-success");
      }
      showToast("Mensagem registrada. Retornaremos em breve — obrigada pelo contato.");
      form.reset();
    });
  }
})();
