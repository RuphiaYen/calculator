//DOM Elements
const operatorEl = document.querySelectorAll('.operator');


const numberEl = document.querySelectorAll('.number');
const output = document.querySelector('.output');

//Functions
function pressNum(event) {
  if (output.textContent === '0') {
    output.textContent = event.target.textContent;
  } else {
    output.textContent += event.target.textContent;
    console.log(event.target.textContent);
  }
}

function pressOperator(event) {
  let lastOperator = output.textContent.slice(-1);
  if (lastOperator === plusEl || lastOperator === minusEl || lastOperator === timesEl || lastOperator === divideEl) {
   output.textContent = output.textContent.slice(0, -1) + event.target.textContent;
  } else {
    output.textContent += event.target.textContent;
    console.log(target.value);
  }
}
numberEl.forEach(btn => {
  btn.addEventListener('click', pressNum)
});

 operatorEl.forEach(btn => {
 btn.addEventListener('click', pressOperator)
  });

