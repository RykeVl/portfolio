class Calculator {
    constructor() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.reset = false;
        this.errorino = false;
    }

    addNumber(number) {
        if (number === '.' && this.currentOperand.toString().includes('.')) return;

        if (this.reset === true) {
            this.currentOperand = number;
            this.reset = false;
        } else {
            this.currentOperand += number.toString();
        }
    }

    resetInput() {
        this.reset = true;
    }

    addOperation(operation) {
        if (operation === '√' && this.currentOperand) {
            this.operation = operation;
            this.compute();
            return;
        }
        if (operation != '√' && this.operation === '√') {
            if (operation === '-') {
                this.currentOperand += '-';
                this.reset = false;
                return;
            }
            this.compute();
            this.operation = operation;
        }
        if (operation === '-' && this.currentOperand === '') {
            this.currentOperand += '-';
            this.reset = false;
            return;
        }

        if (this.currentOperand === '' && operation != '√') return;

        if (this.currentOperand !== '' && this.previousOperand !== '' && operation != '√') {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(operation) {
        let previous = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);

        let currentFractionCount = this.currentOperand.toString().split('.');
        currentFractionCount = currentFractionCount[1];
        let previousFractionCount = this.previousOperand.toString().split('.');
        previousFractionCount = previousFractionCount[1];

        let totalFractionCount;
        if (previousFractionCount && currentFractionCount) {
            if (previousFractionCount.length < currentFractionCount.length) {
                totalFractionCount = currentFractionCount.length;
            } else if (previousFractionCount) {
                totalFractionCount = previousFractionCount.length;
            } 
        }
        if (previousFractionCount || currentFractionCount) {
            if (previousFractionCount) {
                totalFractionCount = previousFractionCount;
            } else {
                totalFractionCount = currentFractionCount;
            }
        }

        if (!current && !previous) {
            return;
        }

        switch (this.operation || operation) {
            case '√':
                if (current) {
                    this.currentOperand = Math.sqrt(current);
                } else {
                    this.currentOperand = Math.sqrt(previous);
                }
                if (current < 0) {
                    this.errorino = true;
                }
                break;
            case '^':
                this.currentOperand = Math.pow(previous, current);
                if (totalFractionCount) {
                    totalFractionCount *= current;
                }
                break;
            case '+':
                this.currentOperand = previous + current;
                break;
            case '-':
                this.currentOperand = previous - current;
                break;
            case '*':
                this.currentOperand = previous * current;
                if (totalFractionCount) {
                    totalFractionCount *= 2;
                }
                break;
            case '÷':
                this.currentOperand = previous / current;
                if (totalFractionCount) {
                    totalFractionCount *= 2;
                }
                break;
            default:
                return;
        }

        if (totalFractionCount) {
            this.currentOperand = parseFloat(this.currentOperand).toFixed(totalFractionCount);
        }        

        let fixOperand = this.currentOperand.toString().split('.');

        if (fixOperand[1]) {
            while (fixOperand[1].toString().endsWith('0')) {
                fixOperand[1] = fixOperand[1].toString().slice(0, -1);
            }
            this.currentOperand = fixOperand[0] + '.' + fixOperand[1];
        }        

        this.previousOperand = '';
        this.operation = undefined;
        this.displayUpdate();
    }

    allClear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
        this.errorino = false;
    }

    delete() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }

    displayUpdate() {

        let operand = this.currentOperand.toString().split('.');
        let previous = this.previousOperand.toString().split('.');

        if (operand[0] === '' && operand[1] !== '') {
            operand[0] = 0;
        }
        if (this.currentOperand.toString().endsWith('.')) {
            currentOperandDisplay.innerText = parseFloat(this.currentOperand).toLocaleString('en') + '.';
        } else if (operand[1]) {
            currentOperandDisplay.innerText = parseFloat(operand[0]).toLocaleString('en') + '.' + operand[1];
        } else {
            currentOperandDisplay.innerText = parseFloat(this.currentOperand).toLocaleString('en');
        }

        if (this.operation) {
            if (previous[0] === '' && previous[1] !== '') {
                previous[0] = 0;
            }
            if (previous[1]) {
                previousOperandDisplay.innerText = parseFloat(previous[0]).toLocaleString('en') + '.' + previous[1] + ` ${this.operation}`;
            } else {
                previousOperandDisplay.innerText = parseFloat(this.previousOperand).toLocaleString('en') + ` ${this.operation}`;
            }
        }

        if (isNaN(parseFloat(this.currentOperand))) {
            if (this.currentOperand.toString().includes('.')) {
                currentOperandDisplay.innerText = '.';
            } else if (this.currentOperand === '-') {
                currentOperandDisplay.innerText = this.currentOperand;
            } else {
                currentOperandDisplay.innerText = '';
            }
        }

        if (isNaN(parseFloat(this.previousOperand))) {
            previousOperandDisplay.innerText = '';
        }

        if (this.operation === '√') {
            previousOperandDisplay.innerText = this.previousOperand + ' √';
        }

        if (this.errorino) {
            currentOperandDisplay.innerText = 'Error: press AC';
        }
    }
}

let calculator = new Calculator();

let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]')
let allClearButton = document.querySelector('[data-all-clear]')
let deleteButton = document.querySelector('[data-delete]')
let equalsButton = document.querySelector('[data-equals]')
let currentOperandDisplay = document.querySelector('[data-current-operand]');
let previousOperandDisplay = document.querySelector('[data-previous-operand]');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText);
        calculator.displayUpdate();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addOperation(button.innerText);
        calculator.displayUpdate();
    })
});

allClearButton.addEventListener('click', () => {
    calculator.allClear();
    calculator.displayUpdate();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.displayUpdate();
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.displayUpdate();
    calculator.resetInput();
});