const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const num1 = +form.elements['num1'].value;
  const num2 = +form.elements['num2'].value;
  const operation = form.elements['operation'].value;
  switch (operation) {
    case "+":
      result.textContent = num1 + num2;
      break;
    case "-":
      result.textContent = num1 - num2;
      break;
    case "/":
      if (num2 === 0)  {
        result.textContent = 'Error';
        return;
      }
      result.textContent = num1 / num2;
      break;
    case "*":
      result.textContent = num1 * num2;
      break;
  } 

})