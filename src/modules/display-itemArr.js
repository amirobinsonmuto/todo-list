import { removeAllChildren } from '../helpers/remove-child';

const itemArrUl = document.getElementById('itemarr-ul');
    
function displayItemArr(itemArr) {

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

            let delIcon = document.createElement("img")
            delIcon.setAttribute('src', "../node_modules/bootstrap-icons/icons/trash.svg");
            delIcon.classList.add('filter-red')
            delIcon.classList.add('delIcon');

        rightDiv.append(itemArrLiItemDueDate, delIcon);

        itemArrLi.append(leftDiv, rightDiv);
        itemArrLi.classList.add('itemArrLi');
        itemArrUl.append(itemArrLi);

        if (el.isItemComplete === true) {
            itemArrLiItemTitle.classList.add('strike-through');
            cpltIcon.checked = true;
        } 

    })  

    cpltItem(itemArr);  
    deleteItem(itemArr);
    
}

function cpltItem(itemArr) {
    let cpltIcons = document.querySelectorAll('.cpltIcon');
    cpltIcons.forEach( (cpltIcon) => {
        cpltIcon.addEventListener('click', (e) => {
                let index = e.target.parentElement.parentElement.getAttribute('data-itemindexnum');
                itemArr[index].isItemComplete = true;
                displayItemArr(itemArr);
        })
    })
}


function deleteItem(itemArr) {
    let delIcons = document.querySelectorAll('.delIcon');
    delIcons.forEach( (del) => {
        del.addEventListener('click', (e) => {
            let index = e.target.parentElement.getAttribute('data-itemindexnum');
            itemArr.splice(index, 1);
            removeAllChildren(itemArrUl);
            displayItemArr(itemArr);
        })
    })
}

export { displayItemArr, deleteItem, itemArrUl, cpltItem}