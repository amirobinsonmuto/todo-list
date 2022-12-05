import { addEventListners, addProjBtn } from './modules/add-eventlistners';
import { createDefaultProjObj } from './modules/proj-class';
import { displayProjArr, toggleProjs, activeProjTitleDiv }  from './modules/display-projArr';
import { addItemBtn, displayAddItemBtn } from './modules/generate-addItem-btn';

//functions to invoke at page load;
displayAddItemBtn();
createDefaultProjObj(addItemBtn);
displayProjArr(addProjBtn);
toggleProjs(addItemBtn);
addEventListners();
