import { removeAllChildren } from '../helpers/remove-child';

const itemArrUl = document.getElementById('itemArrUl');
    
function displayItemArr(itemArr) {

    removeAllChildren(itemArrUl);

    itemArr.forEach( (el) => {
        let itemArrLi = document.createElement('li');
        let itemIndexNum = itemArr.indexOf(el);
        itemArrLi.setAttribute('data-itemindexnum', itemIndexNum);
        let itemArrLiItemTitle = document.createElement('p');
        itemArrLiItemTitle.textContent = el.itemTitle
        let itemArrLiItemDueDate = document.createElement('p');
        itemArrLiItemDueDate.textContent = el.itemDueDate;
        let delIcon = document.createElement('p');
        delIcon.textContent = 'delete';
        delIcon.classList.add('delIcon');
        itemArrLi.append(itemArrLiItemTitle, itemArrLiItemDueDate, delIcon);
        itemArrLi.classList.add('itemArrLi');
        itemArrUl.append(itemArrLi);
    })  

    deleteItem(itemArr);
    
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

export { displayItemArr, deleteItem }