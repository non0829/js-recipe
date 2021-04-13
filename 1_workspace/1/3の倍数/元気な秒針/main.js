'use strict'

{
  let count = 0;
  let id = null;
  
  const genkiFunction = function() {
    if(id !== null){
      clearInterval(id)
    }
    count += 1;
    if(count % 3 === 0) {
      console.log(`${count}!!!!!!!`)
    } else {
      console.log(count)
    }
    id = setInterval(genkiFunction, 1000)
  }

  genkiFunction();
}