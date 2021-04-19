const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

choice1.onclick = function() {
  feedback.textContent =
    "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。"
}
choice2.onclick = function() {
  feedback.textContent =
    "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。"
}
choice3.onclick = function() {
  feedback.textContent = "正解！ガニメデは、木星の第三惑星だよ！"
}