'use strict'

{
  const addButton1 = document.getElementById("add-button1")
  const addButton2 = document.getElementById("add-button2")
  const addButton3 = document.getElementById("add-button3")
  const addButton4 = document.getElementById("add-button4")
  const main = document.getElementById('main');

  const Enter = function(btn) {
    btn.previousElementSibling.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        btn.click();
      }
    })  
  }
  addButton1.addEventListener('click', () => {
    addCard(addButton1);
  })  
  Enter(addButton1);
  
  addButton2.addEventListener('click', () => {
    addCard(addButton2);
  })  
  Enter(addButton2);
  
  addButton3.addEventListener('click', () => {
    addCard(addButton3);
  })  
  Enter(addButton3);

  addButton4.addEventListener('click', () => {
    const newTitle = document.getElementById('newTitle');
    const newWord = document.getElementById('newWord');

    if(newWord.value === "") {
      return;
    }
    if(addButton4.textContent === 'New'){
      addButton4.textContent = '追加';
      newTitle.textContent = newWord.value;
      newWord.value = '';
      newWord.setAttribute('placeholder', "add todo list")
      newList();
    } else {
      addCard(addButton4);
    }
  })
  
  Enter(addButton4);

  
  const addCard = function(btn) {
    if(btn.previousElementSibling.value === "") {
      return
    }
    const card = createCard(btn.previousElementSibling.value)
    btn.parentElement.parentElement.previousElementSibling.append(card)
    
    btn.previousElementSibling.value = ""

  } 

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

  const newList = function() {
    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container')
    main.appendChild(listContainer);

    const listHeader = document.createElement('div');
    listHeader.classList.add('list-header');
    listContainer.appendChild(listHeader);

    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('card-container');
    listContainer.appendChild(cardsContainer);

    const listFooter = document.createElement('div');
    listFooter.classList.add('list-footer');
    listContainer.appendChild(listFooter);

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    listFooter.appendChild(inputContainer);

    const inputTodo = document.createElement('input');
    inputTodo.classList.add('input-todo');
    inputTodo.setAttribute('type', 'text');
    inputTodo.setAttribute('placeholder', 'Enter this file title');
    inputContainer.appendChild(inputTodo);

    const inputButton = document.createElement('div');
    inputButton.classList.add('input-button');
    inputButton.textContent = 'New';
    inputContainer.appendChild(inputButton);

    inputButton.addEventListener('click', () => {
      if(inputTodo.value === "") {
        return
      }
      if(inputButton.textContent === 'New'){
        inputButton.textContent = '追加';
        listHeader.textContent = inputTodo.value;
        inputTodo.value = '';
        inputTodo.setAttribute('placeholder', 'add todo list');
        newList();
      } else {
        addCard(inputButton);
      }
    })
    Enter(inputButton)
  }

  

        // <div class="list-container">
        //   <div class="list-header">新しいこと</div>
        //   <div class="cards-container">
        //     <!-- ここに追加 -->
        //   </div>
        //   <div class="list-footer">
        //     <div class="input-container">
        //       <input type="text" class="input-todo" />
        //       <div class="input-button" id="add-button3">追加</div>
        //     </div>
        //   </div>
        // </div>
}