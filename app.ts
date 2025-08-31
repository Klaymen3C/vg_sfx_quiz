

const sfxBox = document.getElementById("sfxBox") as HTMLDivElement;


//Crear un nuevo reproductor
function crearSoundPlayer(id: string, name: string | string[], sound: string): void {
    const soundDiv = document.createElement('div');
    soundDiv.classList.add('soundplayer');

    soundDiv.innerHTML = `
        <audio id= "audio-${id}" src="${sound}"></audio>
        <button id="btnPlay-${id}" class="btn-play">
            <svg class="svg-play" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" />
            </svg>
        </button>
        <input class="input-sound-name" type="text" placeholder="Input answer...">
        <p class ="id-sfx" id="${id}">${id}</p>

    `;

    sfxBox.appendChild(soundDiv);

    const audio = document.getElementById(`audio-${id}`) as HTMLAudioElement;
    const btnPlay = document.getElementById(`btnPlay-${id}`) as HTMLButtonElement;

    function playSound() {
        btnPlay?.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
            }
        });
    }

    playSound();

}

declare global {
    interface Window {
        crearSoundPlayer: (id: string, name: string | string[], sound: string) => void;
    }
}

window.crearSoundPlayer = crearSoundPlayer;

async function chargeSounds() {
    try {
        const res = await fetch('sounds.json');
        const data: { id: string; name: string | string[]; sound: string }[] = await res.json();

        data.forEach(sound => {
            crearSoundPlayer(sound.id, sound.name, sound.sound);
        });
    } catch (error) {
        console.log('Error al cargar el JSON', error);

    }
}

document.addEventListener('DOMContentLoaded', chargeSounds);


// crearSoundPlayer(1, "./recursos/sounds/superMarioBros-coin.m4a");
// crearSoundPlayer(2, "./recursos/sounds/wololo.m4a");
// crearSoundPlayer(3, "./recursos/sounds/crashCollectGem.m4a");




