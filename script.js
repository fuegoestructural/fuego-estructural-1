document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  const links = window.FUEGO_SOCIAL || {};
  document.querySelectorAll("[data-social]").forEach(el => {
    const url = (links[el.dataset.social] || "").trim();
    if (url && /^https:\/\/(www\.)?/.test(url)) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.classList.remove("is-disabled");
    } else {
      el.href = "#";
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.addEventListener("click", event => event.preventDefault());
      el.title = "Añade la URL de este perfil en social-config.js";
    }
  });
  document.getElementById("year").textContent = new Date().getFullYear();
});
