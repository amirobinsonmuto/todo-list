
import { projFormDiv, projForm,  submitProjBtn, cancelProjBtn,
        generateProjForm, displaySubmitProjBtn, displayCancelProjBtn } 
        from './generate-proj-form.js';
import { projArr, createProjObj } from './proj-class.js';
import { addItemBtn, displayAddItemBtn } from './generate-addItem-btn.js';
import { itemFormDiv, submitItemBtn, cancelItemBtn,
        generateItemForm, displaySubmitItemBtn, displayCancelItemBtn } 
        from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
import { displayProjArr, toggleProjs } from './display-projArr';
import { displayItemArr } from './display-itemArr';
import { allItemsFlatted, allItemsLi, combineAllItems, displayAllItemFlattedArray
        , deleteItemAll } 
        from './combine-display-all-items';
import { thisWeekLi, todayLi, displayFilteredItemsByDate, filteredAllItemsFlatted } 
        from './display-filtered-items-bydate.js';
import { display } from '../helpers/display';
import { disableToggle, activateToggle } from '../helpers/disable-toggle';

const addProjBtn = document.getElementById('add-proj-btn');
function addEventListners() {

    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', display);

    addProjBtn.addEventListener('click', ()=>{
        generateProjForm(addProjBtn);
        displaySubmitProjBtn();
        displayCancelProjBtn();
        disableToggle('.projArrLi');
    })

    submitProjBtn.addEventListener('click', ()=>{ 
        createProjObj(addItemBtn); 
        projFormDiv.removeChild(projForm);
        displayProjArr(addProjBtn);
        toggleProjs(addItemBtn);
        activateToggle('.projArrLi');
        displayAddItemBtn(); 

    })

    cancelProjBtn.addEventListener('click', ()=>{
        projFormDiv.removeChild(projForm);
        displayProjArr(addProjBtn);
        toggleProjs(addItemBtn);
        activateToggle('.projArrLi');
    })

    addItemBtn.addEventListener('click', ()=>{
        generateItemForm(addItemBtn); 
        displaySubmitItemBtn(addItemBtn); 
        displayCancelItemBtn();
        disableToggle('.projArrLi');
    })

    submitItemBtn.addEventListener('click', ()=>{
        //get the index number from the submitItemBtn
        let submitItemBtnIndex = submitItemBtn.getAttribute('data-indexNum');
        //call a method using the index number
        projArr[submitItemBtnIndex].createItemObj();
        removeAllChildren(itemFormDiv);
        displayItemArr(projArr[submitItemBtnIndex].itemArr);
        displayAddItemBtn();
        activateToggle('.projArrLi');
    })

    cancelItemBtn.addEventListener('click', ()=>{
        removeAllChildren(itemFormDiv);
        displayAddItemBtn(); 
        activateToggle('.projArrLi');
    })

    allItemsLi.addEventListener('click', ()=>{
        combineAllItems();
        displayAllItemFlattedArray(allItemsFlatted, allItemsLi);
        deleteItemAll(allItemsFlatted, allItemsLi);  
    })

    todayLi.addEventListener('click', ()=>{
        combineAllItems();
        displayFilteredItemsByDate(-1);
        displayAllItemFlattedArray(filteredAllItemsFlatted, todayLi);
        deleteItemAll(filteredAllItemsFlatted, todayLi)
    })

    thisWeekLi.addEventListener('click', ()=>{
        combineAllItems();
        displayFilteredItemsByDate(5);
        displayAllItemFlattedArray(filteredAllItemsFlatted, thisWeekLi);
        deleteItemAll(filteredAllItemsFlatted, thisWeekLi);
    })
}

export { addProjBtn, addEventListners }








