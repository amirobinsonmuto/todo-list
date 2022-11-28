//function to generate a todo item card

const todoItemCardsDiv = document.getElementById('todoItemCardsDiv');
    
function displayItemCard(item) {

    const todoItemCardsList = document.createElement('ul');
    todoItemCardsList.classList.add('todoItemCardsList');

    const titleLi = document.createElement('li');
    titleLi.textContent = item.title;
    const descriptionLi = document.createElement('li');
    descriptionLi.textContent = item.description;
    const dueDateLi = document.createElement('li');
    dueDateLi.textContent = item.dueDate;
    const priorityLi = document.createElement('li');
    priorityLi.textContent = item.priority;

    todoItemCardsList.append(
        titleLi, 
        descriptionLi, 
        dueDateLi, 
        priorityLi
    );
    
    todoItemCardsDiv.appendChild(todoItemCardsList);
}

export { todoItemCardsDiv, displayItemCard }