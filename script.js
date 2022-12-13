class Calculator {
    constructor(previous, current){
        this.previous = previous
        this.current = current
        this.clear()
    }

    clear(){
        this.currentoperand = ''
        this.previousoperand = ''
        this.operation = undefined
    }

    delete(){
        this.currentoperand = this.currentoperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if (number === '.' && this.currentoperand.includes('.')) return
        this.currentoperand = this.currentoperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentoperand === '') return
        if (this.previousoperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.previousoperand = this.currentoperand
        this.currentoperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousoperand)
        const curr = parseFloat(this.currentoperand)
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation){
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '*':
                computation = prev * curr
                break
            case '/':
                computation = prev / curr
                break
        }
        this.currentoperand = computation
        this.operation = undefined
        this.previousoperand = ''
    }

    updateDisplay(){
        this.current.innerText = this.currentoperand
        this.previous.innerText = this.previousoperand
        if (this.operation != null){
            this.previous.innerText = `${this.previousoperand}` + `${this.operation}`
        }
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

operationbuttons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsbutton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearbutton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

deletebutton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})