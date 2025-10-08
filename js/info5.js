document.addEventListener('DOMContentLoaded', () => {
  const firstVideo = document.querySelector('.infovideo'); // Finder den første video med class "infovideo"

  if (!firstVideo) return; // Findes videoen ikke, afsluttes funktionen

  // Starter lyden
  const enableAudio = () => {
    firstVideo.muted = false; // Slår lyden til (mute slås fra)
    firstVideo.play().catch(() => {}); // Forsøger at starte videoen igen efter interaktion fra bruger
  };

  // Aktiver lyd ved første interaktion
  window.addEventListener('pointerdown', enableAudio, true);
  window.addEventListener('touchstart', enableAudio, true);
  window.addEventListener('keydown', enableAudio, true);
});
