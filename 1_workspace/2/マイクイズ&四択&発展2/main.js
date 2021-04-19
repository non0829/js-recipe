'use strict';

{
  const quizTitle = document.getElementById('quizTitle');
  const quizImg = document.getElementById('quizImg');
  const flex = document.getElementById('flex');
  const answer = document.getElementById('answer');

  const btnSet = function(btn) {
    btn.classList.add('btn');
    flex.appendChild(btn);
  }
  
  const btn1 = document.createElement('li');
  btnSet(btn1);
  const btn2 = document.createElement('li');
  btnSet(btn2);
  const btn3 = document.createElement('li');
  btnSet(btn3);
  const btn4 = document.createElement('li');
  btnSet(btn4);
  
  const quiz = {
    title: 'これはなんでしょうか？',
    image: 'https://i-storage.tenki.jp/large/storage/static-images/suppl/article/image/2/27/277/27715/1/large.jpg',
    type: [
      {
        select: 'リンゴ',
        text: '正解！'
      },
      {
        select: 'ブドウ',
        text: '不正解！'
      },
      {
        select: 'イチゴ',
        text: '不正解！'
      },
      {
        select: 'モモ',
        text: '不正解！'
      },
    ]    
  }

  const makeQuiz = function() {
      quizTitle.textContent = quiz.title;
      quizImg.src = quiz.image;
      
      btn1.textContent = quiz.type[0].select;
      btn2.textContent = quiz.type[1].select;
      btn3.textContent = quiz.type[2].select;
      btn4.textContent = quiz.type[3].select;
  }

  const textView = function(number) {
    answer.textContent = quiz.type[number].text;
  }

  btn1.addEventListener('click', () => {
    textView(0);
  });
  btn2.addEventListener('click', () => {
    textView(1);
  });
  btn3.addEventListener('click', () => {
    textView(2);
  });
  btn4.addEventListener('click', () => {
    textView(3);
  });

  makeQuiz();
}