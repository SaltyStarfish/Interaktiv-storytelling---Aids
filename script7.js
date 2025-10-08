
// Find alle elementer med klassen .flip-icon (pile-ikonerne på forsiden)
// og kør en funktion for hvert ikon
document.querySelectorAll('.flip-icon').forEach(icon => {
    icon.addEventListener('click', function() {
      const card = this.closest('.flip-card');
      card.classList.add('flipped');
    });
  });

  // Luk og vend tilbage til forsiden
document.querySelectorAll('.lukke-icon').forEach(icon => {
    icon.addEventListener('click', function() {
      const card = this.closest('.flip-card'); // find kortet
      card.classList.remove('flipped'); // fjern flip
    });
  });