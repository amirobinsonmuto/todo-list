
import { projFormDiv, projForm,  submitProjBtn, cancelProjBtn,
        generateProjForm, displaySubmitProjBtn, displayCancelProjBtn } 
        from './generate-proj-form.js';
import { projArr, createProjObj } from './proj-class.js';
import { addItemBtn, displayAddItemBtn } from './generate-addItem-btn.js';
import { todoItemFormDiv, itemForm,  submitItemBtn, cancelItemBtn,
        generateItemForm, displaySubmitItemBtn, displayCancelItemBtn } 
        from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
import { displayProjArr, toggleProjs } from './display-projArr';
import { displayItemArr } from './display-itemArr';
    

function addEventListners() {

    const addProjBtn = document.getElementById('addProjBtn');
    
    addProjBtn.addEventListener('click', ()=>{
        //generate a proj form
        generateProjForm();
        //display a submit proj button
        displaySubmitProjBtn();
        displayCancelProjBtn();
    })

    submitProjBtn.addEventListener('click', ()=>{ 
        //create a proj obj and push it to projArr 
        //and assign in the index number to submitProjBtn           
        createProjObj(addItemBtn); 
        //display an add item button
        displayAddItemBtn(); 
        projFormDiv.removeChild(projForm);

        displayProjArr(projArr);
        toggleProjs(addItemBtn);
        console.log(projArr);
    })

    cancelProjBtn.addEventListener('click', ()=>{
        projFormDiv.removeChild(projForm);

    })

    addItemBtn.addEventListener('click', ()=>{
        //generate a todo item form
        generateItemForm(); 
        //display a submit item button and transfer the index number attached 
        //on submitProjBtn to addItemBtn
        displaySubmitItemBtn(addItemBtn); 
        displayCancelItemBtn();
    })

    cancelItemBtn.addEventListener('click', ()=>{
        removeAllChildren(itemFormDiv);
        displayAddItemBtn(); 
    })

    submitItemBtn.addEventListener('click', ()=>{
        //get the index number from the submitItemBtn
        let submitItemBtnIndex = submitItemBtn.getAttribute('data-indexNum');
        //call a method using the index number
        projArr[submitItemBtnIndex].createItemObj();
        removeAllChildren(itemFormDiv);
        //display an add item button again

        displayItemArr(projArr[submitItemBtnIndex].itemArr);
        displayAddItemBtn();


        console.log(projArr[submitItemBtnIndex].itemArr);
    })



}


export { addEventListners }







