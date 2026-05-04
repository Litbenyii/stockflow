// activar modo JS
document.documentElement.classList.add("js");

/* FADE */
const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

/* CARD GLOW */
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});

/* NAV SCROLL */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

/* PARALLAX SUAVE */
const parallaxElements = document.querySelectorAll(".parallax");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  parallaxElements.forEach(el => {
    const speed = 0.2;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
  if (!glow) return;

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const dashboard = document.querySelector('.dashboard');

if (dashboard) {
  dashboard.addEventListener('mousemove', (e) => {
    const rect = dashboard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    dashboard.style.setProperty('--x', `${x}px`);
    dashboard.style.setProperty('--y', `${y}px`);
  });
}

