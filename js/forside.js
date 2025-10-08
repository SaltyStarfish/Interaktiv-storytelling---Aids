
const overlay = document.getElementById('clickOverlay');
const video = document.getElementById('tidslinje');

// Når brugeren klikker hvor som helst på overlay
overlay.addEventListener('click', () => {
    // Vis video, skjul overlay
    video.style.display = 'block';
    overlay.style.display = 'none';

    // Start video med lyd
    video.play().catch(error => { // Håndter fejl, hvis videoen ikke kan starte
        console.error("Video kunne ikke starte:", error); // Log fejlen til konsollen
    });
});

// Når videoen er færdig, skift til næste side
video.addEventListener('ended', () => { // Brug 'ended' event for at sikre, at videoen er færdig
    window.location.href = 'index.html'; // Skift til næste side
});