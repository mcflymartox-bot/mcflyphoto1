/* ==========================================================================
   MENÚ HAMBURGUESA + SIDEBAR (RESPONSIVE)
========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const sidebar = document.querySelector(".sidebar");

  /* ---------- HEADER (menú superior) ---------- */
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Cerrar menú al hacer click en un link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  /* ---------- SIDEBAR (estilo Opera GX) ---------- */
  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    // Cerrar sidebar al hacer click en un link
    document.querySelectorAll(".sidebar-nav a").forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }

  /* ---------- SCROLL SUAVE ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
