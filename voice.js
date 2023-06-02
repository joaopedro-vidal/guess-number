const elementKick = document.getElementById('kick');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition ();
recognition.lang = 'en';
recognition.start();

recognition.addEventListener('result', onSpeak);

// fazendo exibir o numero escolhido na tela HTML
function onSpeak(e){
    kick = e.results[0][0].transcript;
    showKickOnScreen(kick);
    checkIfKickIsValid(kick);
    gameOver(kick);
}

function showKickOnScreen (kick){
    elementKick.innerHTML = `
    <div> You said:</div>
    <span class="box">${kick}</span>  
    `
}

function gameOver(kick){
    if(kick === 'game'){
        document.body.innerHTML=
        `<h2 class="game-over">GAME OVER</h2>
        <button id="play-again" class="btn-play">PLAY AGAIN</button>
        `
        document.body.style.backgroundColor = 'black';
    }
}

recognition.addEventListener('end', () => recognition.start())