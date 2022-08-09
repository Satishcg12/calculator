const previorus = document.querySelector('#previorus');
const current = document.querySelector('#current');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');

function Calculator (){
    this.previorus = previorus;
    this.current = current;
    this.prevInput = '';

    this.numbersClick = (e)=>{
        this.event = e;
        this.current.innerText += this.event.target.innerText;
        this.setPrevInput();
    }
    this.operatorsClick = (e)=>{
        this.event = e;
        this.operators = operators
        this.compairPrevInput = () =>{
            this.operators.forEach(operator => {
                console.log(operator.innerText)
                if(operator.innerText !== this.event.target.innerText){
                    return true;
                }
            })
        
        }
        console.log(this.compairPrevInput())
        this.compairPrevInput() ? this.current.innerText += this.event.target.innerText : this.setPrevInput();
        this.setPrevInput();
        
    }
    this.equalsClick = (e)=>{
    }
    this.clearClick = ()=>{
        this.current.innerText = '';
        this.prevInput = '';
    }
    this.backspaceClick = (e)=>{
        this.current.innerText = this.current.innerText.slice(0, -1);
        this.setPrevInput();
    }
    this.setPrevInput = ()=>{
        this.prevInput = this.current.innerText;
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