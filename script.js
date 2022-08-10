const previous = document.querySelector('#previous');
const current = document.querySelector('#current');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

function Calculator (){
    this.previous = previous;
    this.current = current;
    this.prevInput = '';
    this.operatorArray = []
    operators.forEach(operator => {
            this.operatorArray.push(operator.innerText);
    } )

    this.numbersClick = (e)=>{
        this.event = e;
        this.current.innerText += this.event.target.innerText;
        this.setPrevInput(e.target.innerText);
    }
    this.operatorsClick = (e)=>{
        this.event = e;
        this.prevIsOperator = this.operatorArray.includes(this.prevInput);
        console.log(this.prevIsOperator);
        this.prevIsOperator? this.current.innerText.slice(0, -1) : null;
        this.current.innerText += this.event.target.innerText;
        this.setPrevInput(this.event.target.innerText);
    }
    this.equalsClick = (e)=>{
        this.current.innerHTML= parseFloat(eval(this.current.innerText));
    }
    this.clearClick = ()=>{
        this.current.innerText = '';
        this.prevInput = '';
    }
    this.backspaceClick = (e)=>{
        this.current.innerText = this.current.innerText.slice(0, -1);
        this.setPrevInput(e.target.innerText);
    }
    this.setPrevInput = (e)=>{
        this.prevInput = e;
    }
}
const calc = new Calculator();
for (const num of numbers) {
    num.addEventListener('click', function(e) {
        calc.numbersClick(e);
    } );
}
for (const op of operators) {
    op.addEventListener('click', function(e) {
        calc.operatorsClick(e);
    } );
}

clear.addEventListener('click', function(e) {
    calc.clearClick(e);
} );
backspace.addEventListener('click', function(e) {
    calc.backspaceClick(e);
} );


equals.addEventListener('click', function(e) {
    calc.equalsClick(e);
})