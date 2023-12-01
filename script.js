function appendToOutput(value) {
  document.calc.output.value += value;
}

function clearOutput() {
  document.calc.output.value = '';
}

function calculateResult() {
  try {
    document.calc.output.value = calculate(document.calc.output.value);
  } catch (error) {
    document.calc.output.value = 'Error';
  }
}

function calculate(expression) {
  return new Function('return ' + expression)();
}
