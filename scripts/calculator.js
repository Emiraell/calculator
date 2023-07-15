let values = [
  'AC','DEL', '^', ' / ', 
  7, 8, 9, ' * ', 
  4, 5, 6, ' - ',
  1, 2, 3, ' + ',
  0, '.', 'round', '='
];

let valuesHtml = '';
values.forEach((value) => {
  
  if (value === ' / ' || value === ' * ' || value === ' - ' || value === ' + ') {
    valuesHtml += `<button id = "operatorBtn" class = "operators-btn">${value}</button>`;
  } else if (value === 'AC' || value === '^' || value === 'DEL') {
    valuesHtml += `<button id ="upperBtn" class = "upper-btn">${value}</button>`;
  } else {
    valuesHtml += `<button id = "numbersBtn" class = "numbers-btn">${value}</button>`;
  }
  document.querySelector('.cal-btn').innerHTML = valuesHtml
})

let calculate = JSON.parse(localStorage.getItem('outcome')) ||
 0;
document.getElementById('outcome').innerHTML = calculate
 

function calculation (val) {

  if (calculate === 0) {
    calculate = ''
  }
  
  if (val == 'AC' || val == 'C') {
    calculate = 0;
    //localStorage.removeItem('outcome')
  } else if (val === '=') {
     calculate = eval(calculate)
     if (calculate === undefined) {
      calculate = 0
     }  
  } else if (val === 'round') {
    calculate = Math.ceil(eval(calculate))
  } else if (val === 'DEL') {
    calculate += ''
    calculate = calculate.slice(0, -1)
    if (calculate === '') {
      calculate = 0
    }
  } else if (val === '^') {
    calculate += '**' //eval(calculate * calculate);
    
  } else {
    calculate += val;
  }

  if (calculate != 0) {
    document.getElementById('upperBtn').innerHTML = 'C'
  } else {
    document.getElementById('upperBtn').innerHTML = 'AC'
  }
  
  localStorage.setItem('outcome', JSON.stringify(calculate))
  document.getElementById('outcome').innerHTML =`<div>${calculate}</div>`
}

document.querySelectorAll('button').forEach ((button) => {
  button.addEventListener ('click', () => {
    calculation (button.innerHTML);
  })
});