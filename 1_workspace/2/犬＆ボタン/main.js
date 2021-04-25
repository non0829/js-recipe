const imageElement = document.getElementById("dog-image")
const btn = document.getElementById("btn")

// 指定したサーバーにデータを取りに行く
const reload = function() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}

reload();

btn.addEventListener('click', () => {
  reload();
})
