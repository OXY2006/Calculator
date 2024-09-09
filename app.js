// functions for calculator operators
function addNumber(a, b) {
    let output = a + b
    return output
  }
  
  function subtractNumber(a, b) {
    let output = a - b
    return output
  }
  function multiplyNumber(a, b) {
    let output = a * b
    return output
  }
  
  function divideNumber(a, b) {
    if (b === 0) {
      return "cannot divide by 0"
    } else {
      return a / b
    }
  }
  
  let firstN = ""
  let secondN = ""
  let operator = ""
  let displayV = ""
  
  function operate(firstN, operator, secondN) {
    firstN = parseFloat(firstN)
    secondN = parseFloat(secondN)
    if (operator === "+") {
      return addNumber(firstN, secondN)
    } else if (operator === "-") {
      return subtractNumber(firstN, secondN)
    } else if (operator === "*") {
      return multiplyNumber(firstN, secondN)
    } else if (operator === "/") {
      return divideNumber(firstN, secondN)
    }
  }
  
  let display = document.querySelector("#display")
  let clearBtn = document.querySelector("#clearBtn")
  function clear() {
    display.textContent = ""
  }
  clearBtn.addEventListener("click", clear)
  
  let numbers = document.querySelectorAll("#number")
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      display.textContent += number.textContent
      displayV = display.textContent
      if (!operator) {
        firstN = displayV
      
      } else {
        secondN = displayV
        
      }
    })
  })
  let operators = document.querySelectorAll(".blue")
  
  operators.forEach((blue) => {
    blue.addEventListener("click", () => {
      if (firstN && !operator) {
        operator = blue.textContent
        display.textContent = ""
      } else if (firstN && operator && secondN) {
      
        let output = operate(firstN, operator, secondN)
        display.textContent = output
        firstN = output
        secondN = ""
        operator = blue.textContent 
        display.textContent = "" 
      }
    })
  })
  let equalBtn = document.querySelector(".greenb")
  equalBtn.addEventListener("click", () => {
    if (firstN && operator && display.textContent) {
      secondN = display.textContent
      let output = operate(firstN, operator, secondN)
      display.textContent = output
      firstN = output
      secondN = ""
      operator = ""
    }
  })