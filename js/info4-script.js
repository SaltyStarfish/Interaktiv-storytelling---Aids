const video = document.querySelector('video');

// Scroll-funktionen vil ikke virke - den pauser bare videoen :-/
function unmuteVideo() {
    video.muted = false;
    // Remove listeners after unmuting
    window.removeEventListener('click', unmuteVideo);
    // window.removeEventListener('scroll', unmuteVideo);
    window.removeEventListener('keydown', unmuteVideo);
}

window.addEventListener('click', unmuteVideo);
// window.addEventListener('scroll', unmuteVideo);
window.addEventListener('keydown', unmuteVideo);


// Scroll-event som ændrer pillernes placering
window.addEventListener('scroll', function() {
    // Hvor langt man er scrollet ned på siden (0 til 1)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(window.scrollY / docHeight, 1);

    // Hvordan og hvor meget pillerne skal flytte sig (aka, hvor de skal starte, og hvor meget de skal flytte sig)
    // pille-1
    const pille1 = document.getElementById('pille-1');
    const topValue1 = (-50) - ((150-(-50)) * progress); // top: -50px -> -200px
    pille1.style.top = `${topValue1}px`;
    // pille-2
    const pille2 = document.getElementById('pille-2');
    const topValue2 = (-30) - ((150-(-30)) * progress); // top: -30px -> -180px
    pille2.style.top = `${topValue2}px`;
    // pille-3
    const pille3 = document.getElementById('pille-3');
    const topValue3 = 30 - ((150-30) * progress); // top: 30px -> -120px
    pille3.style.top = `${topValue3}px`;
    // pille-4
    const pille4 = document.getElementById('pille-4');
    const topValue4 = 30 - ((100-30) * progress); // 30px -> -40px
    pille4.style.top = `${topValue4}px`;
    // pille-5
    const pille5 = document.getElementById('pille-5');
    const topValue5 = 70 - ((100-70) * progress); // 70px -> 40px
    pille5.style.top = `${topValue5}px`;
    // pille-6
    const pille6 = document.getElementById('pille-6');
    const topValue6 = 100 + ((120-100) * progress); // 100px -> 120px
    pille6.style.top = `${topValue6}px`;
    // pille-7
    const pille7 = document.getElementById('pille-7');
    const topValue7 = 80 + ((100-80) * progress); // 80px -> 100px
    pille7.style.top = `${topValue7}px`;
    // pille-8
    const pille8 = document.getElementById('pille-8');
    const topValue8 = 180 - ((180-150) * progress); // 180px -> 150px
    pille8.style.top = `${topValue8}px`;
    // pille-9
    const pille9 = document.getElementById('pille-9');
    const topValue9 = 150 + ((210-150) * progress); // 150px -> 210px
    pille9.style.top = `${topValue9}px`;
    // pille-10 - flytter sig ikke men fader ind
    const pille10 = document.getElementById('pille-10');
    const opacityValue10 = 0 + progress; // 0 -> 1
    pille10.style.opacity = `${opacityValue10}`;
});