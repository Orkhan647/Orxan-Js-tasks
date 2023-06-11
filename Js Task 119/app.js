function CustomArray(){
    this.array=Array.from(arguments)
}

const customArr= new CustomArray(1,2,3,4,5)
console.log(customArr);