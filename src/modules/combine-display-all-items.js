import { projArr } from './proj-class.js';
import { itemArrUl } from './display-itemArr';
import { itemFormDiv } from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
import { cpltItem, deleteItem } from './display-itemArr';
import { activeProjTitleDiv }  from './display-projArr';

let allItemsFlatted = []
const allTaskBtn = document.getElementById('display-all-items');

function combineAllItems(){

    let allItems = [];

    for (let i=0; i<projArr.length; i++){
        allItems.push(projArr[i].itemArr);
    }

    allItemsFlatted = allItems.flat(1);
    console.log(allItemsFlatted);
}

function displayAllItemFlattedArray(arr) {

    removeAllChildren(itemArrUl);
    removeAllChildren(itemFormDiv);
    activeProjTitleDiv.textContent = "All items";

    arr.forEach( (el) => {
        let itemArrLi = document.createElement('li');
        let itemArrLiItemTitle = document.createElement('p');
        itemArrLiItemTitle.textContent = el.itemTitle
        let itemArrLiItemDueDate = document.createElement('p');
        itemArrLiItemDueDate.textContent = el.itemDueDate;
        let cpltIcon = document.createElement('p');
        cpltIcon.textContent = 'Complete';
        cpltIcon.classList.add('cpltIcon');
        let delIcon = document.createElement('p');
        delIcon.textContent = 'Delete';
        delIcon.classList.add('delIcon');
        itemArrLi.append(itemArrLiItemTitle, itemArrLiItemDueDate, 
                         cpltIcon, delIcon);
        itemArrLi.classList.add('itemArrLi');
        itemArrUl.append(itemArrLi);

        if (el.isItemComplete === true) {
            itemArrLiItemTitle.classList.add('strike-through');
            cpltIcon.classList.add('hidden');
        }
    })  

    //i need to reflect these two to the original itemArr too 
    cpltItemAll(arr);
    deleteItemAll(arr);  
}

function cpltItemAll(arr) {
    let cpltIcons = document.querySelectorAll('.cpltIcon');
    cpltIcons.forEach( (cpltIcon) => {
        cpltIcon.addEventListener('click', (e) => {
            let index = e.target.parentElement.getAttribute('data-itemindexnum');
            arr[index].isItemComplete = true;
            displayAllItemFlattedArray(arr);

        })
    })
}

function deleteItemAll(arr) {
    let delIcons = document.querySelectorAll('.delIcon');
    delIcons.forEach( (del) => {
        del.addEventListener('click', (e) => {
            let index = e.target.parentElement.getAttribute('data-itemindexnum');
            arr.splice(index, 1);
            removeAllChildren(itemArrUl);
            displayAllItemFlattedArray(arr);
        })
    })
}


export { allItemsFlatted, allTaskBtn, combineAllItems, displayAllItemFlattedArray }

