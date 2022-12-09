import { addEventListners, addProjBtn } from './modules/add-eventlistners';
import { createDefaultProjObj } from './modules/proj-class';
import { displayProjArr, toggleProjs, activeProjTitleDiv }  from './modules/display-projArr';
import { addItemBtn, displayAddItemBtn } from './modules/generate-addItem-btn';
import { getProjArrFromLocalStorage } from './modules/localStorage';

//functions to invoke at page load;
displayAddItemBtn();    
if(!localStorage.getItem('LsProjArr') || localStorage.getItem('LsProjArr') == '[]') {
    createDefaultProjObj(addItemBtn);
} else {
    getProjArrFromLocalStorage();
}
displayProjArr(addProjBtn);
toggleProjs(addItemBtn);
addEventListners();
