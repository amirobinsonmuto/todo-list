
import { projFormDiv, projForm,  submitProjBtn, cancelProjBtn,
        generateProjForm, displaySubmitProjBtn, displayCancelProjBtn } 
        from './generate-proj-form.js';
import { projArr, createProjObj } from './proj-class.js';
import { addItemBtn, displayAddItemBtn } from './generate-addItem-btn.js';
import { itemFormDiv, itemForm,  submitItemBtn, cancelItemBtn,
        generateItemForm, displaySubmitItemBtn, displayCancelItemBtn } 
        from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
import { displayProjArr, toggleProjs } from './display-projArr';
import { displayItemArr, deleteItem } from './display-itemArr';
import { differenceInMilliseconds } from 'date-fns';
import { allItemsFlatted, allItemsLi, combineAllItems, displayAllItemFlattedArray } 
        from './combine-display-all-items';
import { thisWeekLi, todayLi, displayFilteredItemsByDate, filteredAllItemsFlatted } 
        from './display-filtered-items-bydate.js';

function addEventListners() {

    const addProjBtn = document.getElementById('add-proj-btn');
    
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
    })

    allItemsLi.addEventListener('click', ()=>{
        combineAllItems();
        displayAllItemFlattedArray(allItemsFlatted, allItemsLi);
    })

    todayLi.addEventListener('click', ()=>{
        combineAllItems();
        displayFilteredItemsByDate(-1);
        displayAllItemFlattedArray(filteredAllItemsFlatted, todayLi);
    })

    thisWeekLi.addEventListener('click', ()=>{
        combineAllItems();
        displayFilteredItemsByDate(5);
        displayAllItemFlattedArray(filteredAllItemsFlatted, thisWeekLi);
    })

}


export { addEventListners }








