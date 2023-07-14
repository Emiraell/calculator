let calArr = [
  'AC','**', '%', '/', 7, 8, 9, 'x', 
  4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='
]
let calHtml = ''
calArr.forEach((calValue) => {
  
  if (calValue === '/' || calValue === 'x' || calValue === '-' || calValue === '+') {
    calHtml += `<button class = "evalBtn">${calValue}</button>`
  } else if (calValue === 'AC' || calValue === '**' || calValue === '%') {
    calHtml += `<button class = "upBtn">${calValue}</button>`
  } else {
  calHtml += `<button class = "valueBtn">${calValue}</button>`
  }
  document.querySelector('.cal-btn').innerHTML = calHtml
})