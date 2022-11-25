
import { projFormDiv, form,  submitProjBtn, generateProjForm, displaySubmitProjBtn } 
        from './generate-proj-form.js';
import { itemArr, projArr, createProjObj } from './proj-class.js';
import { addItemBtn, displayAddItemBtn } from './generate-addItem-btn.js';
import { todoItemFormDiv, itemForm,  submitItemBtn, generateItemForm, displaySubmitItemBtn } 
        from './generate-item-form.js';

//function to display a todo item form
//eventListner to the submit button to create an object
//using the imported createItemObj function

function displayProjForm() {

    const addProjBtn = document.getElementById('addProjBtn');
    addProjBtn.addEventListener('click', ()=>{
        generateProjForm(); //generate a proj form
        displaySubmitProjBtn(); //display a submit proj button

        submitProjBtn.addEventListener('click', ()=>{
            createProjObj(); //create a proj obj and push it to projArr
            displayAddItemBtn(); //display an add item button

            addItemBtn.addEventListener('click', ()=>{
                generateItemForm(); //working
                displaySubmitItemBtn(); //working 

                submitItemBtn.addEventListener('click', ()=>{
                projArr[0].createItemObj(); 
                console.log(projArr[0].itemArr);
                })
            })
        })
    });         
}


export { displayProjForm }








