document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // FADE IN SCROLL
  // =========================
  const elements = document.querySelectorAll(".fade");

  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
  }


  // =========================
  // PARALLAX OPTIMIZADO (Rendimiento fluido)
  // =========================
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        document.querySelectorAll(".parallax").forEach(el => {
          const speed = parseFloat(el.getAttribute("data-speed")) || 0.2;
          el.style.transform = `translateY(${scrollY * speed}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });


  // =========================
  // CURSOR GLOW
  // =========================
  const glow = document.querySelector(".cursor-glow");

  if (glow) {
    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }


  // =========================
  // HOVER DINÁMICO CARDS
  // =========================
  const cards = document.querySelectorAll(".card");

  if (cards.length > 0) {
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
      });
    });
  }

});