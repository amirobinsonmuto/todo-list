import { projArr } from './proj-class.js';

let allItems = [];
let allItemsFlatted = []
const allTaskBtn = document.getElementById('display-all-items');

function combineAllItems(){

    for (let i=0; i<projArr.length; i++){
        allItems.push(projArr[i].itemArr);
    }

    allItemsFlatted = allItems.flat(1);
    console.log(allItemsFlatted);
}


export { allItemsFlatted, allTaskBtn, combineAllItems }

