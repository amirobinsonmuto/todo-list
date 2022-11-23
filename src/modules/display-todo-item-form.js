import { createItemObj } from './todo-item-factory';
import { removeChild } from '../helpers/remove-child.js';
import { todoItemFormDiv, form,  submitBtn, generateItemForm, performSubmitBtn } 
        from '../helpers/generate-form';

//function to display a todo item form
//eventListner to the submit button to create an object
//using the imported createItemObj function

function displayTodoItemForm() {

    const displayTodoItemFormBtn = document.getElementById('displayTodoItemFormBtn');
    displayTodoItemFormBtn.addEventListener('click', ()=> {
        removeChild(form);
        generateItemForm();
        performSubmitBtn();
        submitBtn.addEventListener('click', createItemObj);
    });

}

export { displayTodoItemForm }








