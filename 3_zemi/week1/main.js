'use strict'

{
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  const display = document.getElementById('display');

  button1.addEventListener('click', () => {
    display.textContent = "正解！"
  })
  button2.addEventListener('click', () => {
    display.textContent = "不正解"
  })
  button3.addEventListener('click', () => {
    display.textContent = "不正解"
  })
}