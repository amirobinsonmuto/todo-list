//function to generate a todo item card

function generateItemCard(item) {

    const todoItemCardsDiv = document.getElementById('todoItemcardsDiv');
    
    const todoItemCardsList = document.createElement('ul');
    todoItemCardsList.classList.add('todoItemCardList');

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

export { generateItemCard }