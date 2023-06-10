function CustomString(str) {
    this.str = str;
  }

  CustomString.prototype.reverse = function(){
    return this.str.split('').reverse().join('')
  }
  var myString = new CustomString('orxan');
console.log(myString.reverse())