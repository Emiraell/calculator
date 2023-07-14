let calArr = ['AC','**', '%', '/']
let calHtml = ''
calArr.forEach((calValue) => {
  calHtml += `<button>${calValue}</button>`
  document.querySelector('.cal-btn').innerHTML = calHtml
})