   
const addItemBtn = document.createElement('button');

const displayAddItemBtn = () => {
    addItemBtn.textContent = 'Add todo item';
    const itemFormDiv = document.getElementById('item-form-div');
    itemFormDiv.appendChild(addItemBtn);
    addItemBtn.setAttribute('id', 'addItemBtn');
    addItemBtn.classList.add('add-btn');
    addItemBtn.classList.add('btn');
    addItemBtn.classList.remove('hidden');
}

export { addItemBtn, displayAddItemBtn }