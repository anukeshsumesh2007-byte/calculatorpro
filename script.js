
function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteLast() {
    var currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}
