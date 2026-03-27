// Simple Calculator in JavaScript

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function run(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Invalid operation";
    }
}

// Example usage
console.log(run('add', 5, 3)); // 8
console.log(run('subtract', 10, 4)); // 6
console.log(run('multiply', 7, 6)); // 42
console.log(run('divide', 8, 2)); // 4