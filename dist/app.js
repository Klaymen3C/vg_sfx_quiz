const sfxBox = document.getElementById("sfxBox");
const audio = document.getElementById('audio');
const btnPlay = document.getElementById('btnPlay');
//play-button -> reproduce el audio cargado.
function playSound() {
    btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        }
    });
}
//Crear un nuevo reproductor
function crearSoundPlayer(id, rutaAudio) {
    const soundDiv = document.createElement('div');
    soundDiv.classList.add('soundPlayer');
    soundDiv.innerHTML = `
        <audio id= "audio" src="${rutaAudio}"></audio>
        <button id="btnPlay-${id}">
            <svg class="svg-play" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" />
            </svg>
        </button>
        <input class="input-sound-name" type="text" placeholder="Input answer...">
        <p class+"id-sfx" id="${id}>${id}</p>

    `;
    sfxBox.appendChild(soundDiv);
    playSound();
}
window.crearSoundPlayer = crearSoundPlayer;
crearSoundPlayer(1, "./recursos/sounds/superMarioBros-coin.m4a");
crearSoundPlayer(3, "./recursos/sounds/superMarioBros-coin.m4a");
export {};
//# sourceMappingURL=app.js.map