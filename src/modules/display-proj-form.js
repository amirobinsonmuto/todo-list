
import { projFormDiv, projForm,  submitProjBtn, generateProjForm, displaySubmitProjBtn } 
        from './generate-proj-form.js';
import { projArr, createProjObj } from './proj-class.js';
import { addItemBtn, displayAddItemBtn } from './generate-addItem-btn.js';
import { todoItemFormDiv, itemForm,  submitItemBtn, generateItemForm, displaySubmitItemBtn } 
        from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
    

//function to display a todo item form
//eventListner to the submit button to create an object
//using the imported createItemObj function

function displayProjForm() {

    const addProjBtn = document.getElementById('addProjBtn');
    
    addProjBtn.addEventListener('click', ()=>{
        //generate a proj form
        generateProjForm();
        //display a submit proj button
        displaySubmitProjBtn(); 
    })

    submitProjBtn.addEventListener('click', ()=>{ 
        //create a proj obj and push it to projArr 
        //and assign in the index number to submitProjBtn           
        createProjObj(); 
        //display an add item button
        displayAddItemBtn(); 
        projFormDiv.removeChild(projForm);
    })

    addItemBtn.addEventListener('click', ()=>{
        //generate a todo item form
        generateItemForm(); 
        //display a submit item button and transfer the index number attached 
        //on submitProjBtn to addItemBtn
        displaySubmitItemBtn(); 

    })

    submitItemBtn.addEventListener('click', ()=>{
        //get the index number from the submitItemBtn
        let submitItemBtnIndex = submitItemBtn.getAttribute('data-indexNum');
        //call a method using the index number
        projArr[submitItemBtnIndex].createItemObj();
        removeAllChildren(todoItemFormDiv);
        //display an add item button again
        displayAddItemBtn(); 

        console.log(projArr);
        console.log(projArr[submitItemBtnIndex].itemArr);
    })

}


export { displayProjForm }








