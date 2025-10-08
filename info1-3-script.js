//info1.html//

document.addEventListener('DOMContentLoaded', () => {
  const boxes = Array.from(document.querySelectorAll('.fadebox'));

  function revealOnScroll() {
    const next = boxes.find(b => !b.classList.contains('visible'));
    if (next) {
      const r = next.getBoundingClientRect();
     
      if (r.top < (window.innerHeight - 100)) {

    
        const index = boxes.indexOf(next);
        const delay = index * 200;
        setTimeout(() => next.classList.add('visible'), delay);
      }
    }

    const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 2);
    if (atBottom) {
      const stillHidden = boxes.find(b => !b.classList.contains('visible'));
      if (stillHidden) stillHidden.classList.add('visible');
    }
  }

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('resize', revealOnScroll);
});