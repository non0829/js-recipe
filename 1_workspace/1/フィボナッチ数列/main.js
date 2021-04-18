let firstNumber = 1;
let secondNumber = 1;
let newNumber = 2;

const fibo = function(a,b,c) {
  console.log(1);
  console.log(1);
  
  while(c<1000) {
    c = a + b;
    a = b;
    b = c;
    console.log(c)
  };
} 

fibo(firstNumber, secondNumber, newNumber)
