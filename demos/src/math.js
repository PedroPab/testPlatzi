function sum(a, b) {
  if (!isMultiplesNumberValid(a, b)) return null;
  return a + b;
}

function multiply(a, b) {
  if (!isMultiplesNumberValid(a, b)) return null;

  return a * b;
}

function divide(a, b) {
  if (!isMultiplesNumberValid(a, b)) return null;

  return a / b;
}

function subtract(a, b) {
  if (!isMultiplesNumberValid(a, b)) return null;

  return a - b;
}

//validar que sea un numero
function isNumberValid(a) {
  if (typeof a !== 'number') return false;
  return true
}

//validar multiples números
function isMultiplesNumberValid(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (!isNumberValid(numbers[i])) return false;
  }
  return true;
}

export { sum, multiply, divide, subtract, isNumberValid, isMultiplesNumberValid };