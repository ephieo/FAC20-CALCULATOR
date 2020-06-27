class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement 
        // we want to reset all input to default when a calculator is created. 
        this.clear()
    }
// function for all clear 
    clear(){
this.currentOperand = ''
this.previousOperand = ''
//undefined because if they clear the calculator then no operation is selected.
this.operation = undefined
    }
   // function to delete  
    delete (){

    }
    // function for equals sign 
    equals (){

    }
    // this function is for everytime you enter a number or operation into the input field.
    appendNumber(number){
        /*converting it to a string so that JS doesn't try to calculate it.
        current operand + the number clicked.*/
        if(number === '.' && this.currentOperand.includes('.')) return;
this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    // everytime you click a operand button.
    chooseOperation (operation){

    }
    //Takes the users impute to calculate the result and return a single value. 
    compute (){

    }
    // to update values inside the input field. 
    updateDisplay (){
this.currentOperandTextElement.innerText = this.currentOperand
    }
    
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
// console.log(currentOperandTextElement);

// in order to call the numbers and operands we need to first create a calcultor from the class expression. this is how you define classes.

const calculator = new Calculator (previousOperandTextElement, currentOperandTextElement);
// In this event listener I want the text clicked to be enetered into the calc and I want the display updated so i need to call on the appendNumber mehtod and the UpdateDisplay method as well.
numberButtons.forEach (button => {
    button.addEventListener ('click', () => {
calculator.appendNumber(button.innerText)
calculator.updateDisplay()

    })
})
operationButtons.forEach (button => {
    button.addEventListener ('click', () => {
calculator.chooseOperation(button.innerText)
calculator.updateDisplay()

    })
})
