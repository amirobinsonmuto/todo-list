
import { projFormDiv, form,  submitProjBtn, generateProjForm, displaySubmitProjBtn } 
        from '../helpers/generate-proj-form.js';
import { projArr, createProjObj } from './proj-class.js';
import { addItemBtn, displayAddItemBtn } from '../helpers/generate-addItem-btn.js';
import { todoItemFormDiv, itemForm,  submitBtn, generateItemForm, displaySubmitItemBtn } 
        from '../helpers/generate-item-form.js';

//function to display a todo item form
//eventListner to the submit button to create an object
//using the imported createItemObj function

function displayProjForm() {

    const addProjBtn = document.getElementById('addProjBtn');
    addProjBtn.addEventListener('click', ()=>{
        generateProjForm();
        displaySubmitProjBtn();

        submitProjBtn.addEventListener('click', ()=>{
            createProjObj();
            displayAddItemBtn();

            addItemBtn.addEventListener('click', ()=>{
                generateItemForm();
                displaySubmitItemBtn();

                submitItemBtn.addEventListener('click', ()=>{
                console.log(projArr[0])
                projArr[0].todoItemFactory('hello','hello','hello','hello','hello'); 
                })
            })
        });         
    });
}

export { displayProjForm }








