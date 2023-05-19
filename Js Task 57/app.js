function snakeToKebab(str){
   return str.replaceAll('_','-').toLowerCase()
}
console.log(snakeToKebab('ORXAN_IS_JED_STUDENT'));




// snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur