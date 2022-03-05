export class MathProblem {
    operand1: number = 0;
    operand2: number = 0;
    operator: '+' | '-' | '*' = '+';
    correctAnswer: number = 0;
    mode: Array<'ADD' | 'SUB' | 'MULT'> = ['ADD'];
    numOfDigits: number = 3;

    constructor(digits?: number, modeArr?: Array<'ADD' | 'SUB' | 'MULT'>) {
        if (!!digits) this.numOfDigits = digits;
        if (!!modeArr) this.mode = modeArr;
        this.operator = this.generateOperator();
        let operands = this.generateOperands();
        this.operand1 = operands[0];
        this.operand2 = operands[1];
        this.correctAnswer = this.calculateAnswer();
    }

    generateOperands = () => {
        // get operands based on numOfDigits and if multiplication
        // default to 1 digit numbers
        let nonInclusiveUpperBound = 10;
        let inclusiveLowerBound = 0;
        // if multiplying limit to 0-12
        if (this.operator == '*' && this.numOfDigits != 1) {
            nonInclusiveUpperBound = 13;
        } else if (this.numOfDigits == 3) { 
            nonInclusiveUpperBound = 1000;
            inclusiveLowerBound = 100;
        } else if (this.numOfDigits == 2) {
            nonInclusiveUpperBound = 100;
            inclusiveLowerBound = 10;
        } 
        
        let nbr1 = Math.floor((Math.random() * (nonInclusiveUpperBound - inclusiveLowerBound)) + inclusiveLowerBound);
        let nbr2 = Math.floor((Math.random() * (nonInclusiveUpperBound - inclusiveLowerBound)) + inclusiveLowerBound);
        if (this.operator == '-') return [nbr1, nbr2].sort((a, b) => b - a);
        return [nbr1, nbr2];
    }

    generateOperator = (): '+' | '-' | '*' => {
        let opNum = Math.floor(Math.random() * this.mode.length);
        const o = this.mode[opNum];
        if (o === 'ADD') return '+';
        if (o === 'SUB') return '-';
        return '*';
    }

    checkAnswer = (userProvidedAnswer) => {
        return +userProvidedAnswer == this.correctAnswer;
    }

    calculateAnswer = () => {
        if (this.operator == '+') {
            return this.operand1 + this.operand2;
        }

        if (this.operator == '-') {
            return this.operand1 - this.operand2;
        }

        if (this.operator == '*') {
            return this.operand1 * this.operand2;
        }
    }
}
