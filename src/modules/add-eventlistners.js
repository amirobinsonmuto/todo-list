
import { projFormDiv, projForm, cancelProjBtn,
        generateProjForm, displaySubmitProjBtn, displayCancelProjBtn } 
        from './generate-proj-form.js';
import { projArr, createProjObj } from './proj-class.js';
import { addItemBtn, displayAddItemBtn } from './generate-addItem-btn.js';
import { itemFormDiv, itemForm, submitItemBtn, cancelItemBtn,
        generateItemForm, displaySubmitItemBtn, displayCancelItemBtn } 
        from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
import { displayProjArr, toggleProjs } from './display-projArr';
import { displayItemArr } from './display-itemArr';
import { allItemsFlatted, allItemsLi, combineAllItems, displayAllItemFlattedArray
        , deleteItemAll, cpltItemAll } 
        from './combine-display-all-items';
import { thisWeekLi, todayLi, displayFilteredItemsByDate, filteredAllItemsFlatted } 
        from './display-filtered-items-bydate.js';
import { display } from '../helpers/display';
import { disableToggle, activateToggle } from '../helpers/disable-toggle';
import { populateStorageProjArr } from './localStorage';


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

    //submitProjBtn
    projForm.addEventListener('submit', (event)=>{ 
        event.preventDefault();
        createProjObj(addItemBtn); 
        populateStorageProjArr();
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

    addItemBtn.addEventListener('click', (e)=>{
        generateItemForm(addItemBtn); 
        displaySubmitItemBtn(addItemBtn); 
        displayCancelItemBtn(); 
        disableToggle('.projArrLi');
    })

    itemForm.addEventListener('submit', ()=>{
        //get the index number from the submitItemBtn
        let submitItemBtnIndex = submitItemBtn.getAttribute('data-indexNum');
        //call a method using the index number
        projArr[submitItemBtnIndex].createItemObj();
        populateStorageProjArr();
        removeAllChildren(itemFormDiv);
        displayItemArr(projArr[submitItemBtnIndex].itemArr);
        displayAddItemBtn();
        activateToggle  ('.projArrLi');
    })

    cancelItemBtn.addEventListener('click', ()=>{
        removeAllChildren(itemFormDiv);
        displayAddItemBtn(); 
        activateToggle('.projArrLi');
        titleInput.value = ''
        descrInput.value = ''
        dueDateInput.value = ''
    })

    allItemsLi.addEventListener('click', ()=>{
        combineAllItems();
        displayAllItemFlattedArray(allItemsFlatted, allItemsLi);
        cpltItemAll(allItemsFlatted, allItemsLi);
        deleteItemAll(allItemsFlatted, allItemsLi);  
    })

    todayLi.addEventListener('click', ()=>{
        combineAllItems();
        displayFilteredItemsByDate(-1);
        displayAllItemFlattedArray(filteredAllItemsFlatted, todayLi);
        cpltItemAll(filteredAllItemsFlatted, todayLi);
        deleteItemAll(filteredAllItemsFlatted, todayLi)
    })

    thisWeekLi.addEventListener('click', ()=>{
        combineAllItems();
        displayFilteredItemsByDate(5);
        displayAllItemFlattedArray(filteredAllItemsFlatted, thisWeekLi);
        cpltItemAll(filteredAllItemsFlatted, thisWeekLi);
        deleteItemAll(filteredAllItemsFlatted, thisWeekLi);
    })
}

export { addProjBtn, addEventListners }








