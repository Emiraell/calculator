let values = [
  'AC','^', 'round', ' / ', 7, 8, 9, ' * ', 
  4, 5, 6, ' - ', 1, 2, 3, ' + ', 0, '.', 'DEL', '='
];

let valuesHtml = ''
values.forEach((value) => {
  
  if (value === ' / ' || value === ' * ' || value === ' - ' || value === ' + ') {
    valuesHtml += `<button id = "evalBtn" class = "evalBtn">${value}</button>`
  } else if (value === 'AC' || value === '^' || value === 'round') {
    valuesHtml += `<button id ="upBtn" class = "upBtn">${value}</button>`
  } else {
    valuesHtml += `<button id = "valueBtn" class = "valueBtn">${value}</button>`
  }
  document.querySelector('.cal-btn').innerHTML = valuesHtml
})

let calculated = JSON.parse(localStorage.getItem('outcome')) || ''
document.getElementById('outcome').innerHTML = calculated
 
function calculation (val) {

  if (calculated === 0) {
    calculated = ''
  }
  
  if (val === 'AC') {
    calculated = '';
    localStorage.removeItem('outcome')
  } else if (val === '=') {
     calculated = eval(calculated)
  } else if (val === 'round') {
    calculated = Math.ceil(eval(calculated))
  } else if (val === 'DEL') {
    calculated += ''
    calculated = calculated.slice(0, -1)
    if (calculated === '') {
      calculated = 0
    }
    console.log(calculated)
  } else if (val === '^') {
    calculated = eval(calculated * calculated);
  } else {
    
    //calculated = calculated.slice(0, -1)
  calculated += val;
  }
  localStorage.setItem('outcome', JSON.stringify(calculated))
  //console.log('calculated')
  console.log(calculated)
  document.getElementById('outcome').innerHTML =`<div>${calculated}</div>`
}


document.querySelectorAll('button').forEach ((button) => {
  button.addEventListener ('click', () => {
    calculation (button.innerHTML);
  })
})

