'use strict'

{
  const inputElement = document.getElementById("input-todo")
  const container = document.getElementById("cards-container")
  const addButton = document.getElementById("add-button")

  addButton.addEventListener('click', () => {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ""
  })  

  inputElement.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
      addButton.click();
    }
  })  

  const createCard = function(text) {
    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    card.append(todo)

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    deleteButton.onclick = function() {
      card.remove()
  }
  card.append(deleteButton)

  return card
}
}