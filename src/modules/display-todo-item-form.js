import { createItemObj } from './todo-item-factory';
import { removeChild } from '../helpers/remove-child.js';
import { todoItemFormDiv, form,  submitBtn, generateItemForm,displaySubmitBtn } 
        from '../helpers/generate-form';
import { displayTodoItemCards } from './display-todo-item-cards';
import { todoItemCardsDiv } from '../helpers/generate-item-card'

//function to display a todo item form
//eventListner to the submit button to create an object
//using the imported createItemObj function

function displayTodoItemForm() {

    const displayTodoItemFormBtn = document.getElementById('displayTodoItemFormBtn');
    displayTodoItemFormBtn.addEventListener('click', ()=>{
        removeChild(form);
        generateItemForm();
       displaySubmitBtn();

        submitBtn.addEventListener('click', ()=>{
            createItemObj();
            removeChild(todoItemCardsDiv);
            displayTodoItemCards();
            //removeForm
            removeChild(form);
        });
    });

}

export { displayTodoItemForm }








