function operate(a, operator, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b === 0 ? 'Err' : a / b;
  }
}

let first = '', second = '', op = '', resetNext = false;
const display = document.getElementById('display');

function updateDisplay(val) {
  display.textContent = val;
}

document.querySelector('.characters').addEventListener('click', e => {
  if (!e.target.classList.contains('btn')) return;
  const val = e.target.textContent;

  if (e.target.id === 'clearBtn') {
    first = second = op = '';
    updateDisplay('0');
    return;
  }

  if (e.target.classList.contains('operator')) {
    if (first && op && second) {
      first = operate(first, op, second).toString();
      updateDisplay(first);
      second = '';
    }
    op = val;
    resetNext = true;
    return;
  }

  if (e.target.id === 'equalBtn') {
    if (first && op && second) {
      const result = operate(first, op, second);
      updateDisplay(result);
      first = result.toString();
      op = '';
      second = '';
      resetNext = true;
    }
    return;
  }

  if (e.target.classList.contains('number')) {
    if (resetNext) {
      display.textContent = '';
      resetNext = false;
    }

    if (!op) {
      first += val;
      updateDisplay(first);
    } else {
      second += val;
      updateDisplay(second);
    }
  }
});
