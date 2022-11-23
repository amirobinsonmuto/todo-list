import { createItemObj } from './todo-item-factory';
import { removeChild } from './helpers/remove-child.js';

//function to display a todo item form
//eventListner to the submit button to create an object
//using the imported createItemObj function

function displayTodoItemForm() {

    console.log('displayTodoItemForm is imported properly and working');

    const displayTodoItemFormBtn = document.getElementById('displayTodoItemFormBtn');
    const todoItemFormDiv = document.getElementById('todoItemFormDiv');
    const form = document.createElement('div');
    form.setAttribute('id', 'form')

    displayTodoItemFormBtn.addEventListener('click', ()=> {
        removeChild(form);
        generateForm();
        //submit button 
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'submit';
        submitBtn.setAttribute('id', 'submitBtn');
        submitBtn.classList.add('btn');
        submitBtn.classList.add('btn-primary');
        form.appendChild(submitBtn);
        todoItemFormDiv.appendChild(form);

        submitBtn.addEventListener('click', createItemObj);
    });

}

export { displayTodoItemForm }








