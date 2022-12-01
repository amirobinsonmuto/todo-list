import { projArr } from './proj-class.js';
import { itemArrUl } from './display-itemArr';
import { itemFormDiv } from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
import { activeProjTitleDiv }  from './display-projArr';
import { byDate } from '../helpers/sort-bydate';

let allItemsFlatted = []
const allTaskBtn = document.getElementById('display-all-items');

function combineAllItems(){

    let allItems = [];

    for (let i=0; i<projArr.length; i++){
        allItems.push(projArr[i].itemArr);
    }

    allItemsFlatted = allItems.flat(1);
    allItemsFlatted.sort(byDate);
    console.log(allItemsFlatted);
}

function displayAllItemFlattedArray(arr) {

    removeAllChildren(itemArrUl);
    removeAllChildren(itemFormDiv);
    activeProjTitleDiv.textContent = "All items";
    allTaskBtn.classList.add('active');
    let projArrLis = document.querySelectorAll('.projArrLi');
    projArrLis.forEach(f => f.classList.remove('active'));

    arr.forEach( (el) => {
        let itemArrLi = document.createElement('li');
        let itemIndexNum = arr.indexOf(el);
        itemArrLi.setAttribute('data-itemindexnum', itemIndexNum);
        let itemArrLiItemTitle = document.createElement('p');
        itemArrLiItemTitle.textContent = el.itemTitle
        let projTitle = document.createElement('p');
        projTitle.textContent = 'Project: ' + el.projTitle
        let itemArrLiItemDueDate = document.createElement('p');
        itemArrLiItemDueDate.textContent = el.itemDueDate;
        let cpltIcon = document.createElement('p');
        cpltIcon.textContent = 'Complete';
        cpltIcon.classList.add('cpltIcon');
        let delIcon = document.createElement('p');
        delIcon.textContent = 'Delete';
        delIcon.classList.add('delIcon');
        itemArrLi.append(itemArrLiItemTitle, projTitle, itemArrLiItemDueDate, 
                         cpltIcon, delIcon);
        itemArrLi.classList.add('itemArrLi');
        itemArrUl.append(itemArrLi);

        if (el.isItemComplete === true) {
            itemArrLiItemTitle.classList.add('strike-through');
            cpltIcon.classList.add('hidden');
        }
    })  

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
            
            //find the index number of the proj object that matches the proj title 
            const whichProject = projArr.find( el => el.projTitle == arr[index].projTitle );
            const projArrIndex = projArr.indexOf(whichProject)

            //find the index number of the item object in the respective proj obj
            const findItemObj = projArr[projArrIndex].itemArr.find(el => el == arr[index]);
            let finalindex = projArr[projArrIndex].itemArr.indexOf(findItemObj);
            projArr[projArrIndex].itemArr[finalindex].isItemComplete = true;

        })
    })
}

function deleteItemAll(arr) {
    let delIcons = document.querySelectorAll('.delIcon');
    delIcons.forEach( (del) => {
        del.addEventListener('click', (e) => {
            let index = e.target.parentElement.getAttribute('data-itemindexnum');
            
            //find the index number of the proj object that matches the proj title 
            const whichProject = projArr.find( el => el.projTitle == arr[index].projTitle );
            const projArrIndex = projArr.indexOf(whichProject)

            //find the index number of the item object in the respective proj obj
            const findItemObj = projArr[projArrIndex].itemArr.find(el => el == arr[index]);
            let finalindex = projArr[projArrIndex].itemArr.indexOf(findItemObj);
            projArr[projArrIndex].itemArr.splice(finalindex, 1);

            arr.splice(index, 1);
            removeAllChildren(itemArrUl);
            displayAllItemFlattedArray(arr);

        })
    })
}


export { allItemsFlatted, allTaskBtn, combineAllItems, displayAllItemFlattedArray }

