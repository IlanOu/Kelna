//~ Lancement de la cinematique de debut de jeu
function playStartCinematic() {
    leftClickPressed = false;
    noCursor()
    image(gameIntroductionVideo, 0, 0, viewportDisplayWidth, viewportDisplayHeight);
}

function videoEnded() {
    background(0)
    startCinematicPlaying = false
    if (!startSoundPlay) {
        startGameVoice()
        startSoundPlay = true
    }
}