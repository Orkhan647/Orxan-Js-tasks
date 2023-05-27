const enUzunSoz = (cumle) => {
    const kelimeler = cumle.split(' ')
    let enUzunSoz= ''
    for(let i=0;i<kelimeler.length;i++){
        if(kelimeler[i].length>enUzunSoz.length){
            enUzunSoz=kelimeler[i]
        }
    }
    return enUzunSoz
}
console.log(enUzunSoz('bu cumle javascript ucun bir testdir'))