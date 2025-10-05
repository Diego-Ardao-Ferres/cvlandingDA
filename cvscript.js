// Año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Parallax sutil en los blobs (fondo blanco + acentos #5888A1)
const blobs = Array.from(document.querySelectorAll('.parallax'));

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset;
      // Diferentes velocidades para cada blob
      blobs.forEach((el, i) => {
        const speed = (i + 1) * 0.05; // 0.05, 0.10, 0.15
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// Suavizar scroll para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', a.getAttribute('href'));
    }
  });
});
