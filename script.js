const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};


/*DOM Elements
const operatorEl = document.querySelectorAll('.operator');
const numberEl = document.querySelectorAll('.number');
const output = document.querySelector('.output');

//Functions
/* function pressNum(event) {
  if (output.textContent === '0') {
    output.textContent = event.target.textContent;
  } else {
    output.textContent += event.target.textContent;
    console.log(event.target.textContent);
  }
}
*/

function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0."
    calculator.waitingForSecondOperand = false;
    return
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForSecondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}


function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}

function getPercent(special) {
  const { firstOperand, operator, displayValue } = calculator
  const inputValue = parseFloat(displayValue);
  if (firstOperand == null && !isNaN(inputValue)) {
    // the first operand must have the decimal version of the percentage
    const result = calculatePercent(inputValue);

    calculator.firstOperand = result;
    const displayValue = `${parseFloat(result.toFixed(7))}`
    calculator.displayValue = displayValue
  } else if (operator) {
    // the same as with the second operand
    const result = calculatePercent(inputValue);

    // calculator.firstOperand = result;
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
  }
}
function calculatePercent(value) {
  // make all values into decimal instead of with percent sign
  return value / 100
}

/*function getPercDecimal(percent) {
  if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;

  }
}
 */
function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

function updateDisplay() {
  const display = document.querySelector('.screen');
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calc-buttons');
keys.addEventListener('click', event => {
  const { target } = event;
  const { value } = target;
  if (!target.matches('button')) {
    return;
  }

  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(value);
      break;
    case '%':
      getPercent();
      break;
    case '.':
      inputDecimal(value);
      break;
    case 'all-clear':
      resetCalculator();
      break;
    default:
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }

  updateDisplay();
});

/* numberEl.forEach(btn => {
  btn.addEventListener('click', pressNum)
});

/* operatorEl.forEach(btn => {
 btn.addEventListener('click', pressOperator)
  });
*/
