
//function to generate an from to gater item info
const itemFormDiv = document.getElementById('item-form-div');
const itemForm = document.createElement('form');
itemForm.setAttribute('id', 'itemForm')
const submitItemBtn = document.createElement('button');
const cancelItemBtn = document.createElement('button');
//title
const titleDiv = document.createElement('div');
titleDiv.classList.add('form-group');
const titleLabel = document.createElement('label');
const titleInput = document.createElement('input');
//description
const descrDiv = document.createElement('div');
descrDiv.classList.add('form-group');
const descrLabel = document.createElement('label');
const descrInput = document.createElement('textarea');
//duedate
const dueDateDiv = document.createElement('div');
dueDateDiv.classList.add('form-group');
const dueDateLabel = document.createElement('label');
const dueDateInput = document.createElement('input');

function generateItemForm() {

    //title
    titleLabel.textContent = 'Item Title';
    titleLabel.setAttribute('for', 'title');
    titleLabel.setAttribute('class', 'form-label');
    titleInput.setAttribute('type', 'text');
    titleInput.required = true;
    titleInput.setAttribute('class', 'form-control');
    titleInput.setAttribute('id', 'itemTitle');
    titleDiv.append(titleLabel, titleInput);
    itemForm.appendChild(titleDiv);

    //description
    descrLabel.textContent = 'Description';
    descrLabel.setAttribute('for', 'descr');
    descrLabel.setAttribute('class', 'form-label');
    descrLabel.setAttribute('rows', '4');
    descrLabel.setAttribute('cols', '20');
    descrInput.setAttribute('class', 'form-control');
    descrInput.setAttribute('id', 'itemDescr');
    descrDiv.append(descrLabel, descrInput);
    itemForm.appendChild(descrDiv);

    //dueDate
    dueDateLabel.textContent = 'Due Date';
    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.setAttribute('class', 'form-label');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('class', 'form-control');
    dueDateInput.setAttribute('id', 'itemDueDate');
    dueDateInput.required = true;
    dueDateDiv.append(dueDateLabel, dueDateInput);
    itemForm.appendChild(dueDateDiv);
    
    //append
    itemFormDiv.appendChild(itemForm);

}   

//submit button 
function displaySubmitItemBtn(addItemBtn) {
    submitItemBtn.textContent = 'submit';
    submitItemBtn.setAttribute('id', 'submitItemBtn');
    submitItemBtn.setAttribute('type', 'submit');
    submitItemBtn.classList.add('btn');
    submitItemBtn.classList.add('btn-primary');
    itemForm.appendChild(submitItemBtn);
    itemFormDiv.appendChild(itemForm);
    let addItemBtnIndex = addItemBtn.getAttribute('data-indexNum');
    submitItemBtn.setAttribute('data-indexNum', addItemBtnIndex);
}

function displayCancelItemBtn() {
    cancelItemBtn.textContent = 'cancel';
    cancelItemBtn.setAttribute('id', 'cancelItemBtn');
    cancelItemBtn.classList.add('btn');
    cancelItemBtn.classList.add('btn-secondary');
    itemForm.appendChild(cancelItemBtn);
    itemFormDiv.appendChild(itemForm);
}

export { itemFormDiv, itemForm,  submitItemBtn, cancelItemBtn,
         generateItemForm, displaySubmitItemBtn, displayCancelItemBtn }
