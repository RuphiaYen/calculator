const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const prcntEl = document.querySelector('.percent');
const specialEl = document.querySelectorAll('.special');

const divideEl = document.querySelector('.divide');
const timeEl = document.querySelector('.times');
const minusEl = document.querySelector('.minus');
const plusEl = document.querySelector('.plus');
const equalEl = document.querySelector('.equal');

const operatorEl = document.querySelectorAll('.operator');


const periodEl = document.querySelector('.period');
const oneEl = document.querySelector('.one');
const twoEl = document.querySelector('.two');
const threeEl = document.querySelector('.three');
const fourEl = document.querySelector('.four');
const fiveEl = document.querySelector('.five');
const sixEl = document.querySelector('.six');
const sevenEl = document.querySelector('.seven');
const eightEl = document.querySelector('.eight');
const nineEl = document.querySelector('.nine');
const zeroEl = document.querySelector('.zero')
const numberEl = document.querySelectorAll('.number');
const output = document.querySelector('.output');



numberEl.forEach(btn => {
  btn.addEventListener('click', event => {
    output.textContent = event.target.textContent;
    console.log(btn);
  });
});

operatorEl.forEach(btn => {
  btn.addEventListener('click', event => {
    output.textContent = event.target.textContent;
    console.log(btn);
  });
});

