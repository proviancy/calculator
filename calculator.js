const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const screen = document.querySelector('.screenText');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

let answer = 0;
let num1 = '';
let num2 = '';
let operation = '';   

function add(num1, num2) {
    answer = num1 + num2;
}

function subtract(num1, num2) {
    answer = num1 - num2;
}

function multiply(num1, num2) {
    answer = num1 * num2;
}

function divide(num1, num2) {
    answer = num1 / num2;
}

function operate(operation, num1, num2) {
    if (operation === "add"){
        add(num1,num2);
        return answer;
    } else if (operation === "subtract") {
        subtract(num1,num2);
        return answer;
    } else if (operation === "multiply") {
        multiply(num1,num2);
        return answer;
    } else if (operation === "divide") {
        divide(num1,num2);
        return answer;
    }
}

function clearScreen() {
    screen.textContent = '';
}

function calculate() {
    clearScreen();
    // screen.textContent = operate(operation,num1,num2);
    screen.textContent = operate(operation,num1,num2);
    num1, num2 = '';
}

numbers.forEach(number => {
    number.addEventListener('click', function (e) {
        screen.textContent += e.target.textContent;
    });
});

operations.forEach(operator => {
    operator.addEventListener('click', function (e) {
        if (!(num2 == '' || num2 == undefined)) {
            calculate();
            num1 = Number.parseInt(screen.textContent);
            num2 = '';
        }
        if (num1 == '' || num1 == undefined) {
            num1 = Number.parseInt(screen.textContent);
            clearScreen();
        } else {
            num2 = Number.parseInt(screen.textContent);
            calculate();
            num1 = Number.parseInt(screen.textContent);
            clearScreen();
        }
        operation = e.target.classList[0];
        // if (num1 == '' || num1 == undefined){
        //     num1 = Number.parseInt(screen.textContent);
        //     console.log(num1);
        //     clearScreen();
        // } else if (num2 == '' || num2 == undefined) {
        //     num2 = Number.parseInt(screen.textContent);
        //     console.log(num2);
        //     clearScreen();
        // } else {
        //     tempNum = Number.parseInt(screen.textContent);
        //     calculate();
        //     num1 = screen.textContent;
        //     num2 = tempNum;
        //     tempNum = '';
        //     calculate();
        //     num1 = Number.parseInt(screen.textContent);
        // }
    });
});

clear.addEventListener('click', () => {
    clearScreen();
    num1 = '';
    num2 = '';
    operation = '';    
});

equals.addEventListener('click', () => {
    num2 = Number.parseInt(screen.textContent);
    calculate();
});