
let calArr = [
  'AC',' ** ', 'round', ' / ', 7, 8, 9, ' * ', 
  4, 5, 6, ' - ', 1, 2, 3, ' + ', 0, '.', '=', 'DEL'
];

let calHtml = ''
calArr.forEach((calValue) => {
  
  if (calValue === ' / ' || calValue === ' * ' || calValue === ' - ' || calValue === ' + ') {
    calHtml += `<button id = "evalBtn" class = "evalBtn">${calValue}</button>`
    
  } else if (calValue === 'AC' || calValue === ' ** ' || calValue === 'round') {
    calHtml += `<button id ="upBtn" class = "upBtn">${calValue}</button>`
  } else {
  calHtml += `<button id = "valueBtn" class = "valueBtn">${calValue}</button>`
  }
  document.querySelector('.cal-btn').innerHTML = calHtml
})


let calculated = ''
function calculation (val) {

  if (calculated === 0) {
    calculated = ''
  }
  
  if (val === 'AC') {
    calculated = 0;
  } else if (val === '=') {
     calculated = eval(calculated)
  } else if (val === 'round') {
    calculated = Math.ceil(eval(calculated))
  } else if (val === 'DEL') {
    calculated = calculated.slice(0, -1)
    if (calculated === '') {
      calculated = 0
    }
    console.log(calculated)
  } else {
  calculated += val;
  }
  
  //console.log('calculated')
  console.log(calculated)
  document.getElementById('outcome').innerHTML = calculated
}

//calculation ()


/*document.querySelectorAll('.evalBtn').forEach ((buttons) => {
  buttons.addEventListener ('click', () => {
    calculation (buttons.innerHTML);
    //console.log(buttons.innerHTML)
  })
})

document.querySelectorAll('.upBtn').forEach ((buttons) => {
  buttons.addEventListener ('click', () => {
    calculation (buttons.innerHTML);
    //console.log(buttons.innerHTML)
  })
})*/

document.querySelectorAll('button').forEach ((buttons) => {
  buttons.addEventListener ('click', () => {
    calculation (buttons.innerHTML);
    //console.log(buttons.innerHTML)
  })
})

