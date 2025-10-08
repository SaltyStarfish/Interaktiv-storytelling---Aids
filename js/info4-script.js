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