let audio = null; // Declare a global variable to store the audio element

// Function to play sound effect
function playSoundEffect() {
    if (audio === null || audio.paused) { // Check if audio is null or paused
        audio = new Audio('./SOUNDS/CODE EXPLODE STUDIOS ANNOUNCEMENT.mp3');
        audio.play();
    }
}
