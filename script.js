let currentDisplay = '0';
const display = document.getElementById('display');
const clearBtn = document.getElementById('clearBtn');
let isResultDisplayed = false;

function updateDisplay() {
    display.textContent = currentDisplay;
}

function appendToDisplay(value) {
    if (isResultDisplayed || currentDisplay === '0') {
        if (value === '.') {
            currentDisplay = '0.';
        } else {
            currentDisplay = value;
        }
        isResultDisplayed = false;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
    // Change back to C if user starts typing
    if (clearBtn.textContent === 'AC') {
        clearBtn.textContent = 'C';
    }
}

function handleClear() {
    if (clearBtn.textContent === 'AC') {
        allClear();
    } else {
        backspace();
    }
}

function allClear() {
    currentDisplay = '0';
    updateDisplay();
    clearBtn.textContent = 'C';
    isResultDisplayed = false;
}

function backspace() {
    if (currentDisplay.length === 1) {
        currentDisplay = '0';
    } else {
        currentDisplay = currentDisplay.slice(0, -1);
    }
    updateDisplay();
}

function calculate() {
    try {
        const expression = currentDisplay.replace(/×/g, '*').replace(/÷/g, '/');
        currentDisplay = eval(expression).toString();
        updateDisplay();
        clearBtn.textContent = 'AC';
        isResultDisplayed = true;
    } catch (error) {
        currentDisplay = 'Error';
        updateDisplay();
    }
}

// Initialize display
updateDisplay();