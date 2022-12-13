import { removeAllChildren } from '../helpers/remove-child';

import { 
    addItemBtn, 
    displayAddItemBtn 
} from './generate-addItem-btn';

import { 
    itemFormDiv, 
    submitItemBtn, 
    generateItemForm, 
    displayCancelItemBtn,
    saveEditItemBtn, 
    titleInput, 
    descrInput, 
    dueDateInput 
} from './generate-item-form.js';

import { 
    disableToggle, 
    activateToggle 
} from '../helpers/disable-toggle';

const itemArrUl = document.getElementById('itemarr-ul');
    
const displayItemArr = (itemArr) => {

    removeAllChildren(itemArrUl);

    itemArr.forEach( (el) => {
        let itemArrLi = document.createElement('li');
        let itemIndexNum = itemArr.indexOf(el);
        itemArrLi.setAttribute('data-itemindexnum', itemIndexNum);

        let leftDiv = document.createElement('div');
        leftDiv.classList.add('left-div');

            let cpltIcon = document.createElement('input');
            cpltIcon.classList.add('cpltIcon');
            cpltIcon.setAttribute('type', 'checkbox');

            let itemArrLiItemTitle = document.createElement('p');
            itemArrLiItemTitle.textContent = el.itemTitle

        leftDiv.append(cpltIcon, itemArrLiItemTitle)

        let rightDiv = document.createElement('div');
        rightDiv.classList.add('right-div');

            let itemArrLiItemDueDate = document.createElement('p');
            itemArrLiItemDueDate.textContent = 'Due: ' + el.itemDueDate;

            let itemEditBtn = document.createElement('p');
            itemEditBtn.textContent = 'Edit';
            itemEditBtn.classList.add('itemEditBtn');
            itemEditBtn.classList.add('btn');
            itemEditBtn.classList.add('btn-outline-primary');
            itemEditBtn.classList.add('btn-sm');

            let delIcon = document.createElement("img")
            delIcon.setAttribute('src', "./bootstrap-icons/trash.svg");
            delIcon.classList.add('filter-red')
            delIcon.classList.add('delIcon');

        rightDiv.append(itemArrLiItemDueDate, itemEditBtn, delIcon);

        itemArrLi.append(leftDiv, rightDiv);
        itemArrLi.classList.add('itemArrLi');
        itemArrUl.append(itemArrLi);

        if (el.isItemComplete === true) {
            itemArrLiItemTitle.classList.add('strike-through');
            cpltIcon.checked = true;
        } 

    })  

    cpltItem(itemArr);  
    editItem(itemArr);
    deleteItem(itemArr);
    
}

let index;

const cpltItem = (itemArr) => {
    let cpltIcons = document.querySelectorAll('.cpltIcon');
    cpltIcons.forEach( (cpltIcon) => {
        cpltIcon.addEventListener('click', (e) => {
                index = e.target.parentElement.parentElement.getAttribute('data-itemindexnum');
                itemArr[index].isItemComplete = true;
                displayItemArr(itemArr);
        })
    })
}

const deleteItem = (itemArr) => {
    let delIcons = document.querySelectorAll('.delIcon');
    delIcons.forEach( (del) => {
        del.addEventListener('click', (e) => {
            index = e.target.parentElement.parentElement.getAttribute('data-itemindexnum');
            itemArr.splice(index, 1);
            removeAllChildren(itemArrUl);
            displayItemArr(itemArr);
        })
    })
}

const editItem = (itemArr) => {
    let itemEditBtns = document.querySelectorAll('.itemEditBtn');
    itemEditBtns.forEach((editBtn) => {
        editBtn.addEventListener('click', (e) => {
            index = e.target.parentElement.parentElement.getAttribute('data-itemindexnum');
            generateItemForm(addItemBtn);
            titleInput.value = itemArr[index].itemTitle;
            descrInput.value = itemArr[index].itemDesc;
            dueDateInput.value = itemArr[index].itemDueDate;
            saveEditItemBtn();      
            displayCancelItemBtn();
            disableToggle('.projArrLi');
            submitItemBtn.classList.add('hidden');
            saveEditItem(itemArr)
        })
    })
}

const saveEditItem = (itemArr) => {
    let saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click', (e)=>{
        itemArr[index].itemTitle = titleInput.value;
        itemArr[index].itemDesc = descrInput.value;
        itemArr[index].itemDueDate = dueDateInput.value;
        removeAllChildren(itemFormDiv);
        displayItemArr(itemArr);
        displayAddItemBtn();
        activateToggle('.projArrLi');
    })
}

export { displayItemArr, deleteItem, itemArrUl, cpltItem}