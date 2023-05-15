const calculator = {
  read: function () {
    this.num1 = parseFloat(prompt('birinci ededi daxil et'));
    this.num2 = parseFloat(prompt('ikinci ededi daxil et'));
  },
  sum: function () {
    return this.num1 + this.num2;
  },
  multiply: function () {
    return this.num1 * this.num2;
  },
  divide: function () {
    return this.num1 / this.num2;
  },
  subtract: function () {
    return this.num1 - this.num2;
  },
};

calculator.read()
console.log('toplama:',calculator.sum());
console.log('vurma:',calculator.multiply());
console.log('bolme:',calculator.divide());
console.log('cixma:',calculator.subtract());
