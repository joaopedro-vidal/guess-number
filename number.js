const lowerValue = 1;
const highValue = 1000;
const secretNumber = createAleatoryNumber ();

function createAleatoryNumber(){
    return parseInt(Math.random() * highValue + 1)
}

const elementLowerValue = document.getElementById('lower-value');
elementLowerValue.innerHTML = lowerValue;

const elementHighValue = document.getElementById('highest-value');
elementHighValue.innerHTML = highValue;