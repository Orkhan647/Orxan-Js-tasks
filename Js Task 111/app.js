function CustomString(str){
  this.str = str;
}

CustomString.prototype.toCapitalCase= function() {
  return this.str.replace(this.str[0], this.str[0].toUpperCase());
}


let myString = new CustomString('orxan')
console.log(myString.toCapitalCase());
