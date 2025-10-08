const track = document.querySelector('.track');
const cards = [...document.querySelectorAll('.card')];
const dots  = [...document.querySelectorAll('.dot')];

function setActiveDot(index){
  dots.forEach((d,i)=> d.toggleAttribute('aria-current', i===index));
}

function indexFromScroll(){
  const i = Math.round(track.scrollLeft / track.clientWidth);
  return Math.max(0, Math.min(i, cards.length-1));
}

// ved scroll: sæt aktiv prik
track.addEventListener('scroll', () => {
  // throttling via requestAnimationFrame for smoothness
  if (track._ticking) return;
  track._ticking = true;
  requestAnimationFrame(()=> {
    setActiveDot(indexFromScroll());
    track._ticking = false;
  });
});

// klik på prik: scroll til kort
dots.forEach((dot,i)=>{
  dot.addEventListener('click', ()=>{
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  });
});