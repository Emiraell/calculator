
let calArr = [
  'AC',' ** ', ' % ', ' / ', 7, 8, 9, ' * ', 
  4, 5, 6, ' - ', 1, 2, 3, ' + ', 0, '.', '='
];

let calHtml = ''
calArr.forEach((calValue) => {
  
  if (calValue === ' / ' || calValue === ' * ' || calValue === ' - ' || calValue === ' + ') {
    calHtml += `<button id = "evalBtn" class = "evalBtn">${calValue}</button>`
    
  } else if (calValue === 'AC' || calValue === ' ** ' || calValue === ' % ') {
    calHtml += `<button id = "upBtn" class = "upBtn">${calValue}</button>`
  } else {
  calHtml += `<button id = "valueBtn" class = "valueBtn">${calValue}</button>`
  }
  document.querySelector('.cal-btn').innerHTML = calHtml
})


let calculated = ''
function calculation (val) {
  
  if (val === 'AC') {
    calculated = 0;
  } else if (val === '=') {
     calculated = eval(calculated)
  } else {
  calculated += val;
  }
  
  console.log('calculated')
  console.log(calculated)
}

calculation ()


document.querySelectorAll('.evalBtn').forEach ((buttons) => {
  buttons.addEventListener ('click', () => {
    calculation (buttons.innerHTML);
    console.log(buttons.innerHTML)
  })
})

document.querySelectorAll('.up').forEach ((buttons) => {
  buttons.addEventListener ('click', () => {
    calculation (buttons.innerHTML);
    console.log(buttons.innerHTML)
  })
})

document.querySelectorAll('.valueBtn').forEach ((buttons) => {
  buttons.addEventListener ('click', () => {
    calculation (buttons.innerHTML);
    console.log(buttons.innerHTML)
  })
})

