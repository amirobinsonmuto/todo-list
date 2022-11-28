
//function to generate an from to gater item info
const todoItemFormDiv = document.getElementById('todoItemFormDiv');
const itemForm = document.createElement('div');
itemForm.setAttribute('id', 'itemForm')
const submitItemBtn = document.createElement('button');
//title
const titleDiv = document.createElement('div');
titleDiv.classList.add('form-group');
const titleLabel = document.createElement('label');
const titleInput = document.createElement('input');
//description
const descrDiv = document.createElement('div');
descrDiv.classList.add('form-group');
const descrLabel = document.createElement('label');
const descrInput = document.createElement('input');
//duedate
const dueDateDiv = document.createElement('div');
dueDateDiv.classList.add('form-group');
const dueDateLabel = document.createElement('label');
const dueDateInput = document.createElement('input');
//priotiy
const priorityDiv = document.createElement('div');
priorityDiv.classList.add('form-group');
const priorityLabel = document.createElement('label');
const priorityInput = document.createElement('input');


function generateItemForm() {

    //REVISIT LATER TO CREATE A HELPER FUNCTION?
    //title

    titleLabel.textContent = 'Title';
    titleLabel.setAttribute('for', 'title');

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('class', 'form-control');
    titleInput.setAttribute('id', 'itemTitle');

    titleDiv.append(titleLabel, titleInput);
    itemForm.appendChild(titleDiv);

    //description

    descrLabel.textContent = 'descr';
    descrLabel.setAttribute('for', 'descr');

    descrInput.setAttribute('type', 'text');
    descrInput.setAttribute('class', 'form-control');
    descrInput.setAttribute('id', 'itemDescr');

    descrDiv.append(descrLabel, descrInput);
    itemForm.appendChild(descrDiv);

    //dueDate

    dueDateLabel.textContent = 'dueDate';
    dueDateLabel.setAttribute('for', 'dueDate');

    dueDateInput.setAttribute('type', 'text');
    dueDateInput.setAttribute('class', 'form-control');
    dueDateInput.setAttribute('id', 'itemDueDate');

    dueDateDiv.append(dueDateLabel, dueDateInput);
    itemForm.appendChild(dueDateDiv);

    //priority
    
    priorityLabel.textContent = 'priority';
    priorityLabel.setAttribute('for', 'priority');

    priorityInput.setAttribute('type', 'text');
    priorityInput.setAttribute('class', 'form-control');
    priorityInput.setAttribute('id', 'itemPriority');

    priorityDiv.append(priorityLabel, priorityInput);
    itemForm.appendChild(priorityDiv);
    todoItemFormDiv.appendChild(itemForm);

}   

//submit button 
function displaySubmitItemBtn() {
    submitItemBtn.textContent = 'submit';
    submitItemBtn.setAttribute('id', 'submitItemBtn');
    submitItemBtn.classList.add('btn');
    submitItemBtn.classList.add('btn-primary');
    itemForm.appendChild(submitItemBtn);
    todoItemFormDiv.appendChild(itemForm);
}

export { todoItemFormDiv, itemForm,  submitItemBtn, generateItemForm, displaySubmitItemBtn }
