// Finder alle elementer med class 'ikon' og tilføjer klik-events
document.querySelectorAll('.ikon').forEach(icon => {
  const popup = icon.querySelector('.popup'); // Finder den tilhørende popup til hvert ikon
  const closeBtn = popup.querySelector('.luk'); // Finder luk-knappen i popup'en

  // Når ikonet klikkes på, skifter popup'ens synlighed
  icon.addEventListener('click', e => {
    e.stopPropagation(); // Holder klikket inden for dette element
    const isActive = popup.classList.contains('active'); // Tjekker om popup'en allerede er åben
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
    if (!isActive) popup.classList.add('active'); // Tilføjer 'active' og åbner dermed popup'en, hvis den ikke allerede er åben
  });

// Når X-knappen klikkes på, lukkes popup'en
  closeBtn.addEventListener('click', e => {
    e.stopPropagation(); // Forhindrer at andre popups lukkes
    popup.classList.remove('active'); // Fjerner 'active' og skjuler dermed popup'en igen
  });
});

// Lukker alle popups, hvis der klikkes uden for et ikon
document.addEventListener('click', () => {
  document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
});
