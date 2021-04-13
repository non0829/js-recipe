`use strict`

{
  const Figure = document.getElementById('figure')

  Figure.onclick = function () {
    if (Figure.classList.contains('square')){
      Figure.classList.remove('square')
      Figure.classList.add('circle')
    } else if (Figure.classList.contains('circle')){
      Figure.classList.remove('circle')
      Figure.classList.add('triangle')
    } else if(Figure.classList.contains('triangle')){
      Figure.classList.remove('triangle')
      Figure.classList.add('square')
    }
  }
}