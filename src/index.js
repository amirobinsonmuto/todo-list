import { addEventListners, addProjBtn } from './modules/add-eventlistners';
import { createDefaultProjObj } from './modules/proj-class';
import { displayProjArr, toggleProjs, activeProjTitleDiv }  from './modules/display-projArr';
import { addItemBtn, displayAddItemBtn } from './modules/generate-addItem-btn';
import { projArr } from './modules/proj-class';
import { getProjArrFromLocalStorage } from './modules/localStorage';
import { projArrUl } from './modules/display-projArr';

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
