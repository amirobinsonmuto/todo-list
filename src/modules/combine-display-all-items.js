import { projArr } from './proj-class.js';
import { itemArrUl } from './display-itemArr';
import { itemFormDiv } from './generate-item-form.js';
import { removeAllChildren } from '../helpers/remove-child';
import { activeProjTitleDiv }  from './display-projArr';
import { byDate } from '../helpers/sort-bydate';
import { todayLi,thisWeekLi } from './display-filtered-items-bydate';

let allItemsFlatted = []
const allItemsLi = document.getElementById('display-all-items');
let dueDateLis = document.querySelectorAll('.due-date-li');

function combineAllItems(){
    let allItems = [];
    for (let i=0; i<projArr.length; i++){
        allItems.push(projArr[i].itemArr);
    }
    allItemsFlatted = allItems.flat(1);
    allItemsFlatted.sort(byDate);
}

function displayAllItemFlattedArray(arr, obj) {
    removeAllChildren(itemArrUl);
    removeAllChildren(itemFormDiv);

    dueDateLis.forEach(f => f.classList.remove('active'));

    if (obj == allItemsLi){
        activeProjTitleDiv.textContent = "All items";
        allItemsLi.classList.add('active');
    } else if (obj == todayLi){
        activeProjTitleDiv.textContent = "Items Due Today";
        todayLi.classList.add('active');
    } else {
        activeProjTitleDiv.textContent = "Items Due This Week";
        thisWeekLi.classList.add('active');
    }

    let projArrLis = document.querySelectorAll('.projArrLi');
    projArrLis.forEach(f => f.classList.remove('active'));

    arr.forEach( (el) => {
        let itemArrLi = document.createElement('li');
        let itemIndexNum = arr.indexOf(el);
        itemArrLi.setAttribute('data-itemindexnum', itemIndexNum);

        let leftDiv = document.createElement('div');
        leftDiv.classList.add('left-div');

            let cpltIcon = document.createElement('input');
            cpltIcon.classList.add('cpltIcon');
            cpltIcon.setAttribute('type', 'checkbox');

            let itemArrLiItemTitle = document.createElement('p');
            itemArrLiItemTitle.textContent = el.itemTitle

            let projTitle = document.createElement('p');
            projTitle.textContent = 'Project: ' + el.projTitle

        leftDiv.append(cpltIcon, itemArrLiItemTitle, projTitle)

        let rightDiv = document.createElement('div');
        rightDiv.classList.add('right-div');

            let itemArrLiItemDueDate = document.createElement('p');
            itemArrLiItemDueDate.textContent = 'Due: ' + el.itemDueDate;

            let delProjIcon = document.createElement("img")
            delProjIcon.setAttribute('src', "../node_modules/bootstrap-icons/icons/trash.svg");
            delProjIcon.classList.add('filter-red')
            delProjIcon.classList.add('delProjIcon');

        rightDiv.append(itemArrLiItemDueDate, delProjIcon);
        
        itemArrLi.append(leftDiv, rightDiv);
        itemArrLi.classList.add('itemArrLi');
        itemArrUl.append(itemArrLi);

        if (el.isItemComplete === true) {
            itemArrLiItemTitle.classList.add('strike-through');
            cpltIcon.checked = true;

        }
    })  

    cpltItemAll(arr);
    // deleteItemAll(arr);  
}

function cpltItemAll(arr) {
    let cpltIcons = document.querySelectorAll('.cpltIcon');
    cpltIcons.forEach( (cpltIcon) => {
        cpltIcon.addEventListener('click', (e) => {
            let index = e.target.parentElement.parentElement.getAttribute('data-itemindexnum');
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

function deleteItemAll(arr, obj) {
    let delProjIcons = document.querySelectorAll('.delProjIcon');
    delProjIcons.forEach( (del) => {
        del.addEventListener('click', (e) => {
            let index = e.target.parentElement.parentElement.getAttribute('data-itemindexnum');
            
            //find the index number of the proj object that matches the proj title 
            const whichProject = projArr.find( el => el.projTitle == arr[index].projTitle );
            const projArrIndex = projArr.indexOf(whichProject)

            //find the index number of the item object in the respective proj obj
            const findItemObj = projArr[projArrIndex].itemArr.find(el => el == arr[index]);
            let finalIndex = projArr[projArrIndex].itemArr.indexOf(findItemObj);
            projArr[projArrIndex].itemArr.splice(finalIndex, 1);

            arr.splice(index, 1);
            removeAllChildren(itemArrUl);
            displayAllItemFlattedArray(arr, obj);
        })
    })
}


export { allItemsFlatted, allItemsLi, dueDateLis, combineAllItems, 
    displayAllItemFlattedArray, deleteItemAll }

