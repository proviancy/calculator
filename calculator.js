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

let answer = 0;

function operate(operation, num1, num2) {
    if (operation === add){
        add(num1,num2);
        return answer;
    } else if (operation === subtract) {
        subtract(num1,num2);
        return answer;
    } else if (operation === multiply) {
        multiply(num1,num2);
        return answer;
    } else if (operation === divide) {
        divide(num1,num2);
        return answer;
    }
}