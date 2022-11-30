import { removeAllChildren } from '../helpers/remove-child';

const itemArrUl = document.getElementById('itemarr-ul');
    
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

    cpltItem(itemArr);
    deleteItem(itemArr);
    
}

function cpltItem(itemArr) {
    let cpltIcons = document.querySelectorAll('.cpltIcon');
    cpltIcons.forEach( (cpltIcon) => {
        cpltIcon.addEventListener('click', (e) => {
            let index = e.target.parentElement.getAttribute('data-itemindexnum');
            itemArr[index].isItemComplete = true;
            console.log(itemArr);
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

export { displayItemArr, deleteItem }