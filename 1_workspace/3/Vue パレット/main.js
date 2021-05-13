new Vue({
  el: '#app',
  data: {
    red: '0',
    green: '0',
    colors: []
  },
  methods: {
    paint(e) {
      this.red = e.offsetX;
      this.green = e.offsetY;
    },
    pickUpColor() {
      let color = {
        red: this.red,
        green: this.green
      }
      this.colors.push(color)
    },
    display(color) {
      this.red = color.red
      this.green = color.green
    }
  },
  computed: {
    changeText() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`
      }
    }
  }
})