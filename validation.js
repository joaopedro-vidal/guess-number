function checkIfKickIsValid(kick) {
    const numero = +kick

    if (kickIsValid(numero)) {
        elementKick.innerHTML += '<div>Invalid Value</div>'
        return
    }

    if (numberIsHighestOrLower(numero)) {
        elementKick.innerHTML += `
        <div>Invalid value: Speak a number between  ${lowerValue} and ${maiorValor}</div>
        `
        return
    }

    if (numero === secretNumber) {
        document.body.innerHTML = `
            <h2>You are right!</h2>
            <h3>The secret number was ${secretNumber}</h3>
            <button id="play-again" class="btn-play">PlAY AGAIN</button>
        `
    } else if (numero > secretNumber) {
        elementKick.innerHTML += `
        <div>
        The secret number is smaller <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementKick.innerHTML += `
        <div>The secret number is bigger <i class="fa-solid fa-up-long"></i></div>
        `
    }
     
}


function kickIsValid(numero) {
    return Number.isNaN(numero)
}

function numberIsHighestOrLower(numero){
    return numero > highValue || numero < lowerValue
}