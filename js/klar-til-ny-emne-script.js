
const track = document.querySelector('.track');
if (track) {
  const cards = [...track.querySelectorAll('.card')];

  // mål
  const styles = getComputedStyle(document.documentElement);
  const CARD_W = parseFloat(styles.getPropertyValue('--card-width'));
  const GAP    = parseFloat(styles.getPropertyValue('--gap'));
  const STEP   = CARD_W + GAP; // afstand pr. slide

  // snap til index
  const snapTo = (i) => {
    const centerPad = (track.clientWidth - CARD_W) / 2;
    const left = i * STEP - Math.max(0, centerPad);
    track.scrollTo({ left, behavior: 'smooth' });
  };

  // find nærmeste index fra scrollLeft
  const indexFromScroll = () => {
    const centerPad = (track.clientWidth - CARD_W) / 2;
    const approx = (track.scrollLeft + Math.max(0, centerPad)) / STEP;
    return Math.max(0, Math.min(cards.length - 1, Math.round(approx)));
  };

  // drag/swipe
  let dragging = false, startX = 0, startLeft = 0, lastX = 0, lastT = 0, v = 0;

  const down = (e) => {
    dragging = true;
    track.style.scrollBehavior = 'auto';
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    startX = lastX = x;
    startLeft = track.scrollLeft;
    lastT = performance.now();
  };

  const move = (e) => {
    if (!dragging) return;
    const t = performance.now();
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const dx = x - lastX;
    track.scrollLeft = startLeft - (x - startX);
    v = dx / (t - lastT);
    lastX = x; lastT = t;
    e.preventDefault();
  };

  const up = () => {
    if (!dragging) return;
    dragging = false;
    track.style.scrollBehavior = '';
    const base = indexFromScroll();
    const bump = Math.abs(v) > 0.4 ? (v < 0 ? 1 : -1) : 0;
    const target = Math.max(0, Math.min(cards.length - 1, base + bump));
    snapTo(target);
  };

  
  track.addEventListener('touchstart', down, { passive:true });
  window.addEventListener('touchmove', move, { passive:false });
  window.addEventListener('touchend',  up);

  // “aktivt” kort popper let
  const updateActive = () => {
    const i = indexFromScroll();
    cards.forEach((c, k) => {
      const d = Math.abs(k - i);
      c.style.transform = `scale(${k===i ? 1.05 : 0.90})`;
      c.style.opacity   = k===i ? 1 : 0.9;
      c.style.zIndex    = String(100 - d);
    });
  };

  let ticking = false;
  track.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateActive(); ticking = false; });
  }, { passive:true });

  // init
  snapTo(0);
  updateActive();
  window.addEventListener('resize', () => snapTo(indexFromScroll()));
}