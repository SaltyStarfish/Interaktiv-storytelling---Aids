document.querySelectorAll('.ikon').forEach(icon => {
  const popup = icon.querySelector('.popup');
  const closeBtn = popup.querySelector('.luk');

  icon.addEventListener('click', e => {
    e.stopPropagation();
    const isActive = popup.classList.contains('active');
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
    if (!isActive) popup.classList.add('active');
  });


  closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    popup.classList.remove('active');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
});
