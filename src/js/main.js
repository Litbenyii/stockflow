window.__stockflowMainLoaded = true;
document.documentElement.classList.add("js");

window.addEventListener("error", (e) => {
  console.error("[StockFlow main.js] Error:", e.message, e.error);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("[StockFlow main.js] Promise rejection:", e.reason);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("[StockFlow] DOMContentLoaded desde main.js");

  // =========================
  // FADE IN SCROLL (ROBUSTO)
  // =========================
  const elements = document.querySelectorAll(".fade");

  if ("IntersectionObserver" in window && elements.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    elements.forEach((el) => observer.observe(el));
  } else {
    elements.forEach((el) => el.classList.add("visible"));
  }

  // =========================
  // PARALLAX
  // =========================
  const parallaxElements = document.querySelectorAll(".parallax");

  if (parallaxElements.length > 0) {
    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0.2;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });

      ticking = false;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }

  // =========================
  // CURSOR GLOW
  // =========================
  const glow = document.querySelector(".cursor-glow");

  if (glow) {
    let x = 0;
    let y = 0;

    document.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
    });

    const animateGlow = () => {
      glow.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animateGlow);
    };

    animateGlow();
  }

  // =========================
  // HOVER CARDS
  // =========================
  const cards = document.querySelectorAll(".card");

  if (cards.length > 0) {
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    });
  }

  console.log("[StockFlow] main.js terminó correctamente");
});