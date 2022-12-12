class Calculator {
    constructor(previous, current){
        this.previous = previous
        this.current = current
    }

    clear(){
        this.currentoperand = ''
        this.previousoperand = ''
        this.operation = undefined
    }

    delete(){
        
    }

    appendNumber(number){
        this.currentoperand = number
    }

    choseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.current.innerText = this.currentoperand
    }

}




let numberbuttons = document.querySelectorAll('[data-number]')
let operationbuttons = document.querySelectorAll('[data-operation]')
let equalsbutton = document.querySelector('[data-equals]')
let deletebutton = document.querySelector('[data-delete]')
let clearbutton = document.querySelector('[data-clear]')
let previous = document.querySelector('[data-previous]')
let current = document.querySelector('[data-current]')

const calculator = new Calculator(previous, current)

numberbuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})