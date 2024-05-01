function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
let operatorPressed = false;

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function handleOperator(operator) {
    if (!operatorPressed) {
        operatorPressed = true;
        appendToDisplay(operator);
    }
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
    operatorPressed = false;
}
