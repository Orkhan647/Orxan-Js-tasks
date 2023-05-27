const reverseSymbl=(str)=>{
const firtChar= str.charAt(0)
const lastChar= str.charAt(str.length-1)
const middleChar = str.slice(1,str.length-1)
return lastChar+middleChar+firtChar
}
console.log(reverseSymbl('Orxan'));

