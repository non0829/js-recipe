'use strict'

{
  const genkiFunction = function(number) {
    for(let n=1; n<=number; n++) {

      let checkNumber = n

      if(n % 3 === 0) {
        console.log(`${n}!!!!!!!`)
      } else{
        // 一桁ずつチェック
        while(checkNumber >= 1){
          if(checkNumber % 10 === 3){
            console.log(`${n}!!!!!!!`)
            break;
          }
          // 下一桁を切り捨てる
          checkNumber = Math.trunc(checkNumber / 10)
        }
  
        if(checkNumber === 0) {
          console.log(n)
        }
      }
    }
  }
  genkiFunction(100)
}