const showInfo=({ad,age,job})=>{
return{
    a:ad,
    b:`Ad:${ad},Yas:${age},Job:${job}`}
}
const result= showInfo({ad:'Orxan',age:'28',job:'ForntEnd'})

console.log(result.a);
console.log(result.b);