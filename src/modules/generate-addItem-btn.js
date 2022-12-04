   
const addItemBtn = document.createElement('button');

function displayAddItemBtn() {
    addItemBtn.textContent = 'Add todo item';
    const itemFormDiv = document.getElementById('item-form-div');
    itemFormDiv.appendChild(addItemBtn);
    addItemBtn.setAttribute('id', 'addItemBtn');
    addItemBtn.classList.add('add-btn');
    addItemBtn.classList.add('btn');
}

export { addItemBtn, displayAddItemBtn }