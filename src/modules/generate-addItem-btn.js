   
const addItemBtn = document.createElement('button');

function displayAddItemBtn() {
    addItemBtn.textContent = 'add todo item';
    const itemFormDiv = document.getElementById('item-form-div');
    itemFormDiv.appendChild(addItemBtn);
    addItemBtn.setAttribute('id', 'addItemBtn');
    addItemBtn.classList.add('btn');
    addItemBtn.classList.add('btn-secondary');
    addItemBtn.classList.add('mt-3');
}

export { addItemBtn, displayAddItemBtn }