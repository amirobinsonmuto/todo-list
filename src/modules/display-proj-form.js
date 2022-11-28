
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
        generateProjForm(); //generate a proj form
        displaySubmitProjBtn(); //display a submit proj button
    })

    submitProjBtn.addEventListener('click', ()=>{            
        let indexNum = createProjObj(); //create a proj obj and push it to projArr and get an index number
        console.log(indexNum);
        displayAddItemBtn(); //display an add item button
        addItemBtn.setAttribute('data-index', indexNum);
        projFormDiv.removeChild(projForm);
    })

    addItemBtn.addEventListener('click', ()=>{
        generateItemForm(); //generate a todo item form
        displaySubmitItemBtn(); //display a submit item button
        let addItemBtnIndex = addItemBtn.getAttribute('data-index');
        submitItemBtn.setAttribute('data-index', addItemBtnIndex);
    })

    submitItemBtn.addEventListener('click', ()=>{
    let submitItemBtnIndex = submitItemBtn.getAttribute('data-index');
    projArr[submitItemBtnIndex].createItemObj();
    console.log(projArr);
    console.log(projArr[submitItemBtnIndex].itemArr);
    removeAllChildren(todoItemFormDiv);
    displayAddItemBtn(); //display an add item button
    })

}


export { displayProjForm }








