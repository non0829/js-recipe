new Vue ({
  el: '#app',
  data: {
    feedback: '',
    isCorrect: '',
    currentNumber: '0',
    quiz: [
      {
        title: 'この星の名前は何でしょう？',
        image: 'Ganymede.jpg',
        choices: [
          {
            text: 'ゴリアテ',
            feedback: '残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。',
            isCorrect: false,
          },
          {
            text: 'ゼニガメ',
            feedback: '残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。',
            isCorrect: false,
          },
          {
            text: 'ガニメデ',
            feedback: '正解！ガニメデは、木星の第三惑星だよ！',
            isCorrect: true,
          },
        ],
      },
      {
        title: 'これは何でしょう？',
        image: 'Maruoka.png',
        choices: [
          {
            text: 'マンション',
            feedback: '残念！もう一回！',
            isCorrect: false,
          },
          {
            text: '家',
            feedback: '残念！もう一回！',
            isCorrect: false,
          },
          {
            text: '城',
            feedback: '正解！',
            isCorrect: true,
          },
        ],
      },
      {
        title: 'これは何を意味してますか？',
        image: 'Two.jpeg',
        choices: [
          {
            text: '喜びのピース',
            feedback: '正解！',
            isCorrect: true,
          },
          {
            text: 'じゃんけんのチョキ',
            feedback: '正解！',
            isCorrect: true,
          },
          {
            text: '2',
            feedback: '正解！',
            isCorrect: true,
          },
        ],
      },
    ],
  },
  methods: {
    changeText(choice) {
      this.feedback = choice.feedback
      this.isCorrect = choice.isCorrect
    },
    changeQuiz() {
      if(this.currentNumber === 2) {
        this.currentNumber = 0
      } else {
        this.currentNumber++
      }
      this.feedback = ''
      this.isCorrect = false
    }
  },
  computed: {
    createImgUrl() {
      return './images/' + this.quiz[this.currentNumber].image
    }
  }
})