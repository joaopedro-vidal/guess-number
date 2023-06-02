function checkIfKickIsValid(kick) {
    const numero = +kick

    if (kickIsValid(numero)) {
        elementKick.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numberIsHighestOrLower(numero)) {
        elementKick.innerHTML += `
        <div>Valor inválido: Fale um número entre ${lowerValue} e ${maiorValor}</div>
        `
        return
    }

    if (numero === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>
            <button id="play-again" class="btn-play">Jogar Novamente</button>
        `
    } else if (numero > secretNumber) {
        elementKick.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementKick.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
    if (kickIsValid(numero)) {
        if (kick.toUpperCase() === "GAME") {
    
            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
        } else {
    
            elementKick.innerHTML += '<div>Valor Inválido</div>';
        }
    }
     
}


function kickIsValid(numero) {
    return Number.isNaN(numero)
}

function numberIsHighestOrLower(numero){
    return numero > highValue || numero < lowerValue
}