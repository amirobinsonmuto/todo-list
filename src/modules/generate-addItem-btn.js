   
const addItemBtn = document.createElement('button');

function displayAddItemBtn() {
    addItemBtn.textContent = 'add todo item';
    const todoItemFormDiv = document.getElementById('todoItemFormDiv');
    todoItemFormDiv.appendChild(addItemBtn);
    addItemBtn.setAttribute('id', 'addItemBtn');
}

export { addItemBtn, displayAddItemBtn }