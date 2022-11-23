
function generateFormDiv(text, type, id) {
    const window[id+'Div'] = document.createElement('div');
    window[id+'Div'].classList.add('form-group');
    const window[id+'Label'] = document.createElement('label');
    const window[id+'Input'] = document.createElement('input');

    titleLabel.textContent = 'Title';
    titleLabel.setAttribute('for', 'title');

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('class', 'form-control');
    titleInput.setAttribute('id', 'itemTitle');

    titleDiv.append(titleLabel, titleInput);
    form.appendChild(titleDiv);

}







function generateForm() {
    //REVISIT LATER TO CREATE A HELPER FUNCTION?
    //title
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('form-group');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');

    titleLabel.textContent = 'Title';
    titleLabel.setAttribute('for', 'title');

    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('class', 'form-control');
    titleInput.setAttribute('id', 'itemTitle');

    titleDiv.append(titleLabel, titleInput);
    form.appendChild(titleDiv);

    //description
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('form-group');
    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('input');

    descriptionLabel.textContent = 'description';
    descriptionLabel.setAttribute('for', 'description');

    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('class', 'form-control');
    descriptionInput.setAttribute('id', 'itemDescription');

    descriptionDiv.append(descriptionLabel, descriptionInput);
    form.appendChild(descriptionDiv);

    //dueDate
    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('form-group');
    const dueDateLabel = document.createElement('label');
    const dueDateInput = document.createElement('input');

    dueDateLabel.textContent = 'dueDate';
    dueDateLabel.setAttribute('for', 'dueDate');

    dueDateInput.setAttribute('type', 'text');
    dueDateInput.setAttribute('class', 'form-control');
    dueDateInput.setAttribute('id', 'itemDueDate');

    dueDateDiv.append(dueDateLabel, dueDateInput);
    form.appendChild(dueDateDiv);

    //priority
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('form-group');
    const priorityLabel = document.createElement('label');
    const priorityInput = document.createElement('input');

    priorityLabel.textContent = 'priority';
    priorityLabel.setAttribute('for', 'priority');

    priorityInput.setAttribute('type', 'text');
    priorityInput.setAttribute('class', 'form-control');
    priorityInput.setAttribute('id', 'itemPriority');

    priorityDiv.append(priorityLabel, priorityInput);
    form.appendChild(priorityDiv);
    todoItemFormDiv.appendChild(form);

}   
