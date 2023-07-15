// values to be used
let values = [
  'AC','DEL', '^', ' / ', 
  7, 8, 9, ' * ', 
  4, 5, 6, ' - ',
  1, 2, 3, ' + ',
  0, '.', 'round', '='
];

//generating the html buttons for each value  and placing them on the webpage
let valuesHtml = '';
values.forEach((value) => {
  
  if (value === ' / ' || value === ' * ' || value === ' - ' || value === ' + ') {
    valuesHtml += `<button id = "operatorBtn" class = "operators-btn">${value}</button>`;
  } else if (value === 'AC' || value === '^' || value === 'DEL') {
    valuesHtml += `<button id ="upperBtn" class = "upper-btn">${value}</button>`;
  } else if (value === '=') {
    valuesHtml += `<button id ="equalBtn" class = "equal-btn">${value}</button>`;
  } else {
    valuesHtml += `<button id = "numbersBtn" class = "numbers-btn">${value}</button>`;
  }
  document.querySelector('.cal-btn').innerHTML = valuesHtml;
})

//initializing and storing value to calculate if not found on local storage
let calculate = JSON.parse(localStorage.getItem('outcome')) || 0;
document.getElementById('outcome').innerHTML = calculate
 
//the necessary calculations
function calculation (val) {

  // avoid inserting zero at the start of each calculation
  if (calculate === 0) {
    calculate = '';
  }

  //adding to the calculate variable
  if (val == 'AC' || val == 'C') {
    calculate = 0;
  } else if (val === '=') {
    // calculating the calculate(which is in strings) using the eval function 
     calculate = eval(calculate)
     if (calculate === undefined) {
      calculate = 0;
     }  
  } else if (val === 'round') {
    //round the calculation to a whole number
    calculate = Math.ceil(eval(calculate));
  } else if (val === 'DEL') {
    //convert to string in places where the = button was used;
    calculate += '';
    calculate = calculate.slice(0, -1);
    if (calculate === '') {
      calculate = 0;
    }
  } else if (val === '^') {
    //raising the calculate to a an X number;
    calculate += '**';
  } else {
    calculate += val;
  }

  /*manipulate the innerHTML of the AC buttons in cases
  of calculations or no calculations*/
  if (calculate != 0) {
    document.getElementById('upperBtn').innerHTML = 'C';
  } else {
    document.getElementById('upperBtn').innerHTML = 'AC';
  }
  
  //store calculation in local storage to avoid lose of data;
  localStorage.setItem('outcome', JSON.stringify(calculate));
  //rendering the calculations
  document.getElementById('outcome').innerHTML =`<div>${calculate}</div>`;
};

//event listener for all buttons
document.querySelectorAll('button').forEach ((button) => {
  button.addEventListener ('click', () => {
    //each button has an innerHTMl or value
    //pass the value as the parameter into the calculation ()
    calculation (button.innerHTML);
  })
});