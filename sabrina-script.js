//info6.html//

//viste du at//
document.getElementById("vda").onclick = myFunction;

function myFunction() {
  var x = document.getElementById("hide-show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//hjertte video med lyd//
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('videoMedLyd'); // henter video-elementet
  if (!video) return;

  const startMuted = () => {
    video.muted = true; // starter video uden lyd (krav for autoplay)
    video.play().catch(() => {}); // forsøger at starte afspilning
  };

  if (video.readyState >= 2) startMuted(); // starter hvis videoen er klar
  else video.addEventListener('canplay', startMuted, { once: true }); // ellers vent

  const enableAudio = () => {
    video.muted = false; // slår lyd til
    video.play().catch(() => {}); // starter afspilning igen
    // fjerner lyttere så det kun sker én gang
    window.removeEventListener('pointerdown', enableAudio, true);
    window.removeEventListener('touchstart', enableAudio, true);
    window.removeEventListener('keydown', enableAudio, true);
  };

  // aktiver lyd ved første klik, tryk eller tast
  window.addEventListener('pointerdown', enableAudio, true);
  window.addEventListener('touchstart', enableAudio, true);
  window.addEventListener('keydown', enableAudio, true);
});